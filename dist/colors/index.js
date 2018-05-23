'use strict';

var _tools = require('./tools');

var _ansi = require('./ansi');

// eslint-disable-next-line no-extend-native
/**
 * Created by Lucas Teske on 18/05/18.
 * 
 */

var setStringGetter = function setStringGetter(name, value) {
  return Object.defineProperty(String.prototype, name, {
    enumerable: false,
    configurable: false,
    get: value
  });
};

var genColorGet = function genColorGet(colorName) {
  return (0, _tools.ansiSupported)() ? function applyStyleString() {
    return (0, _tools.applyStyleByName)(_ansi.getColor, colorName, this);
  } : function dummy() {
    return this;
  };
};

function rainbow() {
  return (0, _tools.ansiSupported)() ? (0, _tools.applyIteratorFuncStyle)(_ansi.getRainbowColor, this) : this;
}

var colorMap = {
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
};

Object.keys(colorMap).forEach(function (k) {
  return setStringGetter(k, genColorGet(colorMap[k]));
});
(0, _ansi.getColorsName)().forEach(function (k) {
  return setStringGetter(k, genColorGet(k));
});

setStringGetter('rainbow', rainbow);
setStringGetter('silly', rainbow);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2xvcnMvaW5kZXguanMiXSwibmFtZXMiOlsic2V0U3RyaW5nR2V0dGVyIiwibmFtZSIsInZhbHVlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0IiwiZ2VuQ29sb3JHZXQiLCJhcHBseVN0eWxlU3RyaW5nIiwiY29sb3JOYW1lIiwiZHVtbXkiLCJyYWluYm93IiwiY29sb3JNYXAiLCJpbnB1dCIsInZlcmJvc2UiLCJwcm9tcHQiLCJpbmZvIiwiZGF0YSIsImhlbHAiLCJ3YXJuIiwiZGVidWciLCJlcnJvciIsImtleXMiLCJmb3JFYWNoIiwiayJdLCJtYXBwaW5ncyI6Ijs7QUFLQTs7QUFNQTs7QUFPQTtBQWxCQTs7Ozs7QUFtQkEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxTQUFpQkMsT0FBT0MsY0FBUCxDQUFzQkMsT0FBT0MsU0FBN0IsRUFBd0NMLElBQXhDLEVBQThDO0FBQ3JGTSxnQkFBWSxLQUR5RTtBQUVyRkMsa0JBQWMsS0FGdUU7QUFHckZDLFNBQUtQO0FBSGdGLEdBQTlDLENBQWpCO0FBQUEsQ0FBeEI7O0FBTUEsSUFBTVEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsU0FBYyw4QkFBa0IsU0FBU0MsZ0JBQVQsR0FBNEI7QUFDOUUsV0FBTyw2Q0FBMkJDLFNBQTNCLEVBQXNDLElBQXRDLENBQVA7QUFDRCxHQUZpQyxHQUU5QixTQUFTQyxLQUFULEdBQWlCO0FBQUUsV0FBTyxJQUFQO0FBQWMsR0FGakI7QUFBQSxDQUFwQjs7QUFLQSxTQUFTQyxPQUFULEdBQW1CO0FBQ2pCLFNBQU8sOEJBQWtCLDBEQUF3QyxJQUF4QyxDQUFsQixHQUFrRSxJQUF6RTtBQUNEOztBQUVELElBQU1DLFdBQVc7QUFDZkMsU0FBTyxNQURRO0FBRWZDLFdBQVMsTUFGTTtBQUdmQyxVQUFRLE1BSE87QUFJZkMsUUFBTSxPQUpTO0FBS2ZDLFFBQU0sTUFMUztBQU1mQyxRQUFNLE1BTlM7QUFPZkMsUUFBTSxRQVBTO0FBUWZDLFNBQU8sTUFSUTtBQVNmQyxTQUFPO0FBVFEsQ0FBakI7O0FBWUFyQixPQUFPc0IsSUFBUCxDQUFZVixRQUFaLEVBQXNCVyxPQUF0QixDQUE4QjtBQUFBLFNBQUsxQixnQkFBZ0IyQixDQUFoQixFQUFtQmpCLFlBQVlLLFNBQVNZLENBQVQsQ0FBWixDQUFuQixDQUFMO0FBQUEsQ0FBOUI7QUFDQSwyQkFBZ0JELE9BQWhCLENBQXdCO0FBQUEsU0FBSzFCLGdCQUFnQjJCLENBQWhCLEVBQW1CakIsWUFBWWlCLENBQVosQ0FBbkIsQ0FBTDtBQUFBLENBQXhCOztBQUVBM0IsZ0JBQWdCLFNBQWhCLEVBQTJCYyxPQUEzQjtBQUNBZCxnQkFBZ0IsT0FBaEIsRUFBeUJjLE9BQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDE4LzA1LzE4LlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQge1xuICBhbnNpU3VwcG9ydGVkLFxuICBhcHBseVN0eWxlQnlOYW1lLFxuICBhcHBseUl0ZXJhdG9yRnVuY1N0eWxlLFxufSBmcm9tICcuL3Rvb2xzJztcblxuaW1wb3J0IHtcbiAgZ2V0Q29sb3IsXG4gIGdldENvbG9yc05hbWUsXG4gIGdldFJhaW5ib3dDb2xvcixcbn0gZnJvbSAnLi9hbnNpJztcblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZVxuY29uc3Qgc2V0U3RyaW5nR2V0dGVyID0gKG5hbWUsIHZhbHVlKSA9PiBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgbmFtZSwge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgZ2V0OiB2YWx1ZSxcbn0pO1xuXG5jb25zdCBnZW5Db2xvckdldCA9IGNvbG9yTmFtZSA9PiAoYW5zaVN1cHBvcnRlZCgpID8gZnVuY3Rpb24gYXBwbHlTdHlsZVN0cmluZygpIHtcbiAgcmV0dXJuIGFwcGx5U3R5bGVCeU5hbWUoZ2V0Q29sb3IsIGNvbG9yTmFtZSwgdGhpcyk7XG59IDogZnVuY3Rpb24gZHVtbXkoKSB7IHJldHVybiB0aGlzOyB9KTtcblxuXG5mdW5jdGlvbiByYWluYm93KCkge1xuICByZXR1cm4gYW5zaVN1cHBvcnRlZCgpID8gYXBwbHlJdGVyYXRvckZ1bmNTdHlsZShnZXRSYWluYm93Q29sb3IsIHRoaXMpIDogdGhpcztcbn1cblxuY29uc3QgY29sb3JNYXAgPSB7XG4gIGlucHV0OiAnZ3JleScsXG4gIHZlcmJvc2U6ICdjeWFuJyxcbiAgcHJvbXB0OiAnZ3JleScsXG4gIGluZm86ICdncmVlbicsXG4gIGRhdGE6ICdncmV5JyxcbiAgaGVscDogJ2N5YW4nLFxuICB3YXJuOiAneWVsbG93JyxcbiAgZGVidWc6ICdibHVlJyxcbiAgZXJyb3I6ICdyZWQnLFxufTtcblxuT2JqZWN0LmtleXMoY29sb3JNYXApLmZvckVhY2goayA9PiBzZXRTdHJpbmdHZXR0ZXIoaywgZ2VuQ29sb3JHZXQoY29sb3JNYXBba10pKSk7XG5nZXRDb2xvcnNOYW1lKCkuZm9yRWFjaChrID0+IHNldFN0cmluZ0dldHRlcihrLCBnZW5Db2xvckdldChrKSkpO1xuXG5zZXRTdHJpbmdHZXR0ZXIoJ3JhaW5ib3cnLCByYWluYm93KTtcbnNldFN0cmluZ0dldHRlcignc2lsbHknLCByYWluYm93KTtcbiJdfQ==