class Token {
  final String accessToken;
  final String refreshToken;
  final String tokenType;
  final DateTime expiresAt;
  final String idToken;

  bool get isExpired => new DateTime.now().isAfter(expiresAt);
  String get accesstoken => accessToken;

  Token({
    this.accessToken,
    this.refreshToken,
    this.tokenType,
    this.expiresAt,
    this.idToken,
  });

  factory Token.fromJson(Map<String, dynamic> json) {
    return Token(
      accessToken: json['access_token'],
      refreshToken: json['refresh_token'],
      tokenType: json['token_type'],
      expiresAt:
          new DateTime.now().add(new Duration(seconds: json['expires_in'])),
      idToken: json['id_token'],
    );
  }
}
