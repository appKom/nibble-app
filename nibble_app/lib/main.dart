import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:flutter_redux_navigation/flutter_redux_navigation.dart';
import 'package:global_configuration/global_configuration.dart';
import 'package:redux/redux.dart';
import 'package:redux_thunk/redux_thunk.dart';

import 'package:nibble_app/pages/auth/login.dart';
import 'package:nibble_app/pages/auth/online_web.dart';
import 'package:nibble_app/pages/home.dart';
import 'package:nibble_app/redux/store.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // Necessary to wait for config retrieval
  await GlobalConfiguration().loadFromAsset('app_settings');
  final _clientId = GlobalConfiguration().get('client_id');
  final _initalState = AppState.initialState(_clientId);
  final Store<AppState> _store = Store<AppState>(
    reducer,
    initialState: _initalState,
    middleware: [
      thunkMiddleware,
      NavigationMiddleware<AppState>(),
    ],
  );
  runApp(Nibble(store: _store));
}

class Nibble extends StatelessWidget {
  final Store<AppState> store;

  Nibble({this.store});

  @override
  Widget build(BuildContext context) {
    return StoreProvider<AppState>(
      store: store,
      child: MaterialApp(
        initialRoute: '/',
        navigatorKey: NavigatorHolder.navigatorKey,
        routes: {
          '/': (context) => Login(),
          '/login/online': (context) => OnlineWeb(),
          '/home': (context) => Home(),
        },
      ),
    );
  }
}
