const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const db = require("../db/dbConnector");
require("dotenv").config();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: process.env.GOOGLECLIENTID,
      clientSecret: process.env.GOOGLESECRET,
      passRequestToCallback: true,
    },
    (accessToken, refreshToken, profile, done) => {
      const email = profile.emails[0].value;

      //Check if user already exists
      db.oneOrNone("select * from login where email=$1", [email])
        .then((dbUser) => {
          //user exists
          if (dbUser) {
            const user = {
              id: dbUser.id,
              role: dbUser.user_role,
              email: dbUser.email,
            };
            done(null, user);
          }
          //user does not exist
          else {
            db.one(
              "insert into login (email,user_role) values ($1,'patient') returning id;",
              [email]
            ).then((data) => {
              const user = { id: data.id, role: "patient", email: email };
              done(null, user);
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FBAPPID,
      clientSecret: process.env.FBAPPSECRET,
      callbackURL: "/auth/facebook/redirect",
      profileFields: ["email"],
    },
    (accessToken, refreshToken, profile, done) => {
      const email = profile.emails[0].value;
      //Check if user already exists
      db.oneOrNone("select * from login where email=$1", [email])
        .then((dbUser) => {
          //user exists
          if (dbUser) {
            const user = {
              id: dbUser.id,
              role: dbUser.user_role,
              email: dbUser.email,
            };
            done(null, user);
          }
          //user does not exist
          else {
            db.one(
              "insert into login (email,user_role) values ($1,'patient') returning id;",
              [email]
            ).then((data) => {
              const user = { id: data.id, role: "patient", email: email };
              done(null, user);
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  )
);
