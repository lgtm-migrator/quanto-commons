'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _helpers = require('./helpers');

/**
 * Created by Lucas Teske on 07/09/18.
 * 
 */

var transformTimestamp = function transformTimestamp(value) {
  var num = value;

  if (typeof num === 'string' && value !== '') {
    var tmp = new Date(num);
    num = Number.isNaN(tmp.getTime()) ? Number(value) : tmp.getTime();
  }

  if (num instanceof Date) {
    num = num.getTime();
  }

  if (!(0, _helpers.isInteger)(num)) {
    throw new TypeError('Timestamp cannot represent non-integer value: ' + JSON.stringify(value));
  }

  return value;
};

exports.default = new _graphql.GraphQLScalarType({
  name: 'Timestamp',
  description: 'The `Timestamp` scalar type represents a millis timestamp in Unix Epoch Format (UTC).' + 'It simple counts number of milliseconds since 01/01/1970 00:00:00 UTC',
  serialize: transformTimestamp,
  parseValue: transformTimestamp,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === _graphql.Kind.INT || ast.kind === _graphql.Kind.FLOAT ? parseInt(ast.value, 10) : undefined;
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvR1FMVHlwZXMvdGltZXN0YW1wLmpzIl0sIm5hbWVzIjpbInRyYW5zZm9ybVRpbWVzdGFtcCIsInZhbHVlIiwibnVtIiwidG1wIiwiRGF0ZSIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsIlR5cGVFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJHcmFwaFFMU2NhbGFyVHlwZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInNlcmlhbGl6ZSIsInBhcnNlVmFsdWUiLCJwYXJzZUxpdGVyYWwiLCJhc3QiLCJraW5kIiwiS2luZCIsIklOVCIsIkZMT0FUIiwicGFyc2VJbnQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BOztBQUtBOztBQVhBOzs7OztBQWFBLElBQU1BLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLEtBQUQsRUFBMEI7QUFDbkQsTUFBSUMsTUFBTUQsS0FBVjs7QUFFQSxNQUFJLE9BQU9DLEdBQVAsS0FBZSxRQUFmLElBQTJCRCxVQUFVLEVBQXpDLEVBQTZDO0FBQzNDLFFBQU1FLE1BQU0sSUFBSUMsSUFBSixDQUFTRixHQUFULENBQVo7QUFDQUEsVUFBTUcsT0FBT0MsS0FBUCxDQUFhSCxJQUFJSSxPQUFKLEVBQWIsSUFBOEJGLE9BQU9KLEtBQVAsQ0FBOUIsR0FBOENFLElBQUlJLE9BQUosRUFBcEQ7QUFDRDs7QUFFRCxNQUFJTCxlQUFlRSxJQUFuQixFQUF5QjtBQUN2QkYsVUFBTUEsSUFBSUssT0FBSixFQUFOO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDLHdCQUFVTCxHQUFWLENBQUwsRUFBcUI7QUFDbkIsVUFBTSxJQUFJTSxTQUFKLG9EQUErREMsS0FBS0MsU0FBTCxDQUFlVCxLQUFmLENBQS9ELENBQU47QUFDRDs7QUFFRCxTQUFPQSxLQUFQO0FBQ0QsQ0FqQkQ7O2tCQW1CZSxJQUFJVSwwQkFBSixDQUFzQjtBQUNuQ0MsUUFBTSxXQUQ2QjtBQUVuQ0MsZUFDQSwwRkFDQSx1RUFKbUM7QUFLbkNDLGFBQVdkLGtCQUx3QjtBQU1uQ2UsY0FBWWYsa0JBTnVCO0FBT25DZ0IsZ0JBQWM7QUFBQSxXQUFTQyxJQUFJQyxJQUFKLEtBQWFDLGNBQUtDLEdBQWxCLElBQXlCSCxJQUFJQyxJQUFKLEtBQWFDLGNBQUtFLEtBQTVDLEdBQXFEQyxTQUFTTCxJQUFJaEIsS0FBYixFQUFvQixFQUFwQixDQUFyRCxHQUErRXNCLFNBQXZGO0FBQUE7QUFQcUIsQ0FBdEIsQyIsImZpbGUiOiJ0aW1lc3RhbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMDcvMDkvMTguXG4gKiBAZmxvd1xuICovXG5cblxuaW1wb3J0IHtcbiAgR3JhcGhRTFNjYWxhclR5cGUsXG4gIEtpbmQsXG59IGZyb20gJ2dyYXBocWwnO1xuXG5pbXBvcnQgeyBpc0ludGVnZXIgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5jb25zdCB0cmFuc2Zvcm1UaW1lc3RhbXAgPSAodmFsdWU6IG1peGVkKTogbnVtYmVyID0+IHtcbiAgbGV0IG51bSA9IHZhbHVlO1xuXG4gIGlmICh0eXBlb2YgbnVtID09PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICBjb25zdCB0bXAgPSBuZXcgRGF0ZShudW0pO1xuICAgIG51bSA9IE51bWJlci5pc05hTih0bXAuZ2V0VGltZSgpKSA/IE51bWJlcih2YWx1ZSkgOiB0bXAuZ2V0VGltZSgpO1xuICB9XG5cbiAgaWYgKG51bSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICBudW0gPSBudW0uZ2V0VGltZSgpO1xuICB9XG5cbiAgaWYgKCFpc0ludGVnZXIobnVtKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRpbWVzdGFtcCBjYW5ub3QgcmVwcmVzZW50IG5vbi1pbnRlZ2VyIHZhbHVlOiAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX1gKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBHcmFwaFFMU2NhbGFyVHlwZSh7XG4gIG5hbWU6ICdUaW1lc3RhbXAnLFxuICBkZXNjcmlwdGlvbjpcbiAgJ1RoZSBgVGltZXN0YW1wYCBzY2FsYXIgdHlwZSByZXByZXNlbnRzIGEgbWlsbGlzIHRpbWVzdGFtcCBpbiBVbml4IEVwb2NoIEZvcm1hdCAoVVRDKS4nICtcbiAgJ0l0IHNpbXBsZSBjb3VudHMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAwMS8wMS8xOTcwIDAwOjAwOjAwIFVUQycsXG4gIHNlcmlhbGl6ZTogdHJhbnNmb3JtVGltZXN0YW1wLFxuICBwYXJzZVZhbHVlOiB0cmFuc2Zvcm1UaW1lc3RhbXAsXG4gIHBhcnNlTGl0ZXJhbDogYXN0ID0+ICgoYXN0LmtpbmQgPT09IEtpbmQuSU5UIHx8IGFzdC5raW5kID09PSBLaW5kLkZMT0FUKSA/IHBhcnNlSW50KGFzdC52YWx1ZSwgMTApIDogdW5kZWZpbmVkKSxcbn0pO1xuIl19