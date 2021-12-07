import { Strategy, ExtractJwt } from "passport-jwt";
export const applyPassportStrategy = (passport) => {
  const options = {};
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  options.secretOrKey = process.env.SECRET;
  passport.use(
    new Strategy(options, (payload, done) => {
      if (payload.email) {
        return done(null, {
          email: payload.email,
        });
      } else {
        return done(null, false);
      }
    })
  );
};
