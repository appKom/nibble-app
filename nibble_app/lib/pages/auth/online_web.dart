import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:flutter_redux_navigation/flutter_redux_navigation.dart';
import 'package:redux/redux.dart';
import 'package:nibble_app/theme/scibble_color.dart';
import 'package:webview_flutter/webview_flutter.dart';

import 'package:nibble_app/redux/authentication/actions.dart';
import 'package:nibble_app/redux/store.dart';

class OnlineWeb extends StatefulWidget {
  OnlineWeb({Key key}) : super(key: key);

  @override
  _OnlineWebState createState() => _OnlineWebState();
}

class _OnlineWebState extends State<OnlineWeb> {
  @override
  void initState() {
    super.initState();
    if (Platform.isAndroid) WebView.platform = SurfaceAndroidWebView();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Logg inn'),
        backgroundColor: ScibbleColor.onlineOrange,
      ),
      body: StoreConnector<AppState, Store<AppState>>(
        converter: (store) => store,
        builder: (context, store) {
          final pkce = store.state.auth.authPKCEState.pkce;
          return WebView(
            initialUrl: pkce.authenticateUrl,
            navigationDelegate: (NavigationRequest request) {
              Uri responseUri = Uri.parse(request.url);
              String code = responseUri.queryParameters['code'];
              if (code != null) {
                pkce.code = code;
                tradeCodeForToken(store);
                store.dispatch(NavigateToAction.pop());
                return NavigationDecision.prevent;
              }
              return NavigationDecision.navigate;
            },
          );
        },
      ),
    );
  }
}
