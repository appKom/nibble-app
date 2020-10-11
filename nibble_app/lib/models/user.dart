class User {
  int id;
  String firstName;
  String lastName;
  String username;
  String nickname;
  String ntnuUsername;
  int year;
  String email;
  String onlineMail;
  String phoneNumber;
  String address;
  String website;
  String github;
  String linkedin;
  List<Position> positions;
  List<Position> specialPositions;
  String rfid;
  int fieldOfStudy;
  String startedDate;
  bool compiled;
  bool infomail;
  bool jobmail;
  String zipCode;
  String allergies;
  bool markRulesAccepted;
  String gender;
  String bio;
  int saldo;
  bool isCommittee;
  bool isMember;
  String image;
  bool hasExpiringMembership;

  User(
      {this.id,
      this.firstName,
      this.lastName,
      this.username,
      this.nickname,
      this.ntnuUsername,
      this.year,
      this.email,
      this.onlineMail,
      this.phoneNumber,
      this.address,
      this.website,
      this.github,
      this.linkedin,
      this.positions,
      this.specialPositions,
      this.rfid,
      this.fieldOfStudy,
      this.startedDate,
      this.compiled,
      this.infomail,
      this.jobmail,
      this.zipCode,
      this.allergies,
      this.markRulesAccepted,
      this.gender,
      this.bio,
      this.saldo,
      this.isCommittee,
      this.isMember,
      this.image,
      this.hasExpiringMembership});

  User.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    firstName = json['first_name'];
    lastName = json['last_name'];
    username = json['username'];
    nickname = json['nickname'];
    ntnuUsername = json['ntnu_username'];
    year = json['year'];
    email = json['email'];
    onlineMail = json['online_mail'];
    phoneNumber = json['phone_number'];
    address = json['address'];
    website = json['website'];
    github = json['github'];
    linkedin = json['linkedin'];
    if (json['positions'] != null) {
      positions = new List<Position>();
      json['positions'].forEach((v) {
        positions.add(new Position.fromJson(v));
      });
    }
    if (json['special_positions'] != null) {
      specialPositions = new List<Position>();
      json['special_positions'].forEach((v) {
        specialPositions.add(new Position.fromJson(v));
      });
    }
    rfid = json['rfid'];
    fieldOfStudy = json['field_of_study'];
    startedDate = json['started_date'];
    compiled = json['compiled'];
    infomail = json['infomail'];
    jobmail = json['jobmail'];
    zipCode = json['zip_code'];
    allergies = json['allergies'];
    markRulesAccepted = json['mark_rules_accepted'];
    gender = json['gender'];
    bio = json['bio'];
    saldo = json['saldo'];
    isCommittee = json['is_committee'];
    isMember = json['is_member'];
    image = json['image'];
    hasExpiringMembership = json['has_expiring_membership'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['first_name'] = this.firstName;
    data['last_name'] = this.lastName;
    data['username'] = this.username;
    data['nickname'] = this.nickname;
    data['ntnu_username'] = this.ntnuUsername;
    data['year'] = this.year;
    data['email'] = this.email;
    data['online_mail'] = this.onlineMail;
    data['phone_number'] = this.phoneNumber;
    data['address'] = this.address;
    data['website'] = this.website;
    data['github'] = this.github;
    data['linkedin'] = this.linkedin;
    if (this.positions != null) {
      data['positions'] = this.positions.map((v) => v.toJson()).toList();
    }
    if (this.specialPositions != null) {
      data['special_positions'] =
          this.specialPositions.map((v) => v.toJson()).toList();
    }
    data['rfid'] = this.rfid;
    data['field_of_study'] = this.fieldOfStudy;
    data['started_date'] = this.startedDate;
    data['compiled'] = this.compiled;
    data['infomail'] = this.infomail;
    data['jobmail'] = this.jobmail;
    data['zip_code'] = this.zipCode;
    data['allergies'] = this.allergies;
    data['mark_rules_accepted'] = this.markRulesAccepted;
    data['gender'] = this.gender;
    data['bio'] = this.bio;
    data['saldo'] = this.saldo;
    data['is_committee'] = this.isCommittee;
    data['is_member'] = this.isMember;
    data['image'] = this.image;
    data['has_expiring_membership'] = this.hasExpiringMembership;
    return data;
  }
}

class Position {
  int id;
  String committee;
  String position;
  String period;
  String periodStart;
  String periodEnd;

  Position(
      {this.id,
      this.committee,
      this.position,
      this.period,
      this.periodStart,
      this.periodEnd});

  Position.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    committee = json['committee'];
    position = json['position'];
    period = json['period'];
    periodStart = json['period_start'];
    periodEnd = json['period_end'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['committee'] = this.committee;
    data['position'] = this.position;
    data['period'] = this.period;
    data['period_start'] = this.periodStart;
    data['period_end'] = this.periodEnd;
    return data;
  }
}
