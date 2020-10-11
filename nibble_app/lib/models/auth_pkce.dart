import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:random_string/random_string.dart';

class AuthPKCE {
  String _challenge;
  String _verifier;
  String _clientId;
  String _state;
  String code;

  String get clientId => _clientId;
  String get verifier => _verifier;
  String get authenticateUrl => Uri(
        scheme: 'https',
        path: 'online.ntnu.no/openid/authorize',
        queryParameters: {
          'client_id': _clientId,
          'redirect_uri': 'com.example.scibble://login',
          'response_type': 'code',
          'code_challenge': _challenge,
          'code_challenge_method': 'S256',
          'state': _state,
          'scope': 'onlineweb4',
        },
      ).toString();

  AuthPKCE(this._clientId) {
    _verifier = randomString(128);
    _challenge = _stringToSha256(_verifier);
    _state = randomString(128);
  }

  String _stringToSha256(String string) {
    var hash = sha256.convert(utf8.encode(string));
    var cleanHash = base64Url
        .encode(hash.bytes)
        .replaceAll("=", "")
        .replaceAll("+", "-")
        .replaceAll("/", "_");
    return cleanHash;
  }
}
