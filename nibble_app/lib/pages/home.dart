import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:redux/redux.dart';

import 'package:nibble_app/redux/store.dart';
import 'package:nibble_app/theme/scibble_color.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: StoreConnector<AppState, Store<AppState>>(
        converter: (store) => store,
        builder: (context, store) {
          return Scaffold(
            appBar: AppBar(
              title: Text('Sidetittel'),
              backgroundColor: ScibbleColor.onlineOrange,
              actions: [
                IconButton(
                    icon: Icon(Icons.logout),
                    onPressed: () => logoutUser(store))
              ],
            ),
            body: Column(
              children: [
                Text(
                    'Last name: ${store.state.auth.userState.user.toJson() ?? 'no user'}'),
              ],
            ),
          );
        },
      ),
    );
  }
}
