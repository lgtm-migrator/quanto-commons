'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint-disable no-plusplus */
/**
 * Created by Lucas Teske on 20/04/17.
 * 
 */

exports.isRunningInNodeJS = isRunningInNodeJS;
exports.normalizeXMLJSObjectProperties = normalizeXMLJSObjectProperties;
exports.validateEmail = validateEmail;
exports.validateCPF = validateCPF;
exports.validateCNPJ = validateCNPJ;
exports.undefinedOrNull = undefinedOrNull;
exports.validateField = validateField;
exports.validateDateFormat = validateDateFormat;
exports.validateStringLength = validateStringLength;
exports.calcDvMod11 = calcDvMod11;
exports.calcDvMod11Sub11 = calcDvMod11Sub11;
exports.calcDvAgencia = calcDvAgencia;
exports.calcDvConta = calcDvConta;
exports.calcDvMod10 = calcDvMod10;
exports.cleanUndefinedMembers = cleanUndefinedMembers;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isRunningInNodeJS() {
  return typeof module !== 'undefined' && module.exports;
}

function normalizeXMLJSObjectProperties(obj) {
  var keys = Object.keys(obj);
  var nObj = {};
  for (var i = 0; i < keys.length; i += 1) {
    var k = keys[i];
    if (_typeof(obj[k]) === 'object') {
      normalizeXMLJSObjectProperties(obj[k]);
    }
    var t = JSON.parse(JSON.stringify(obj[k][0]));
    if (t !== 'undefined') {
      nObj[k.toLowerCase()] = t !== 'NULL' ? t : null;
    }
  }

  return nObj;
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateCPF(cpfO) {
  var sum = 0;
  var hash = void 0;

  if (cpfO === undefined || cpfO === null) {
    return false;
  }

  var cpf = cpfO.replace(/[^\d]+/g, '');

  if (cpf.length !== '00000000000'.length) {
    return false;
  }

  if (cpf === '00000000000') {
    return false;
  }

  for (var i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
  }

  hash = sum * 10 % 11;

  if (hash === 10 || hash === 11) {
    hash = 0;
  }

  if (hash !== parseInt(cpf.substring(9, 10), 10)) {
    return false;
  }

  // Verification digit
  sum = 0;
  for (var _i = 1; _i <= 10; _i++) {
    sum += parseInt(cpf.substring(_i - 1, _i), 10) * (12 - _i);
  }

  hash = sum * 10 % 11;

  if (hash === 10 || hash === 11) {
    hash = 0;
  }

  return hash === parseInt(cpf.substring(10, 11), 10);
}

function validateCNPJ(cnpjO) {
  if (cnpjO === undefined || cnpjO === null || cnpjO.length !== 14) {
    return false;
  }

  var cnpj = cnpjO.replace(/[^\d]+/g, '');

  if (cnpj.length === 0 || cnpj.length !== 14 || cnpj === '00000000000000' || cnpj === '11111111111111' || cnpj === '22222222222222' || cnpj === '33333333333333' || cnpj === '44444444444444' || cnpj === '55555555555555' || cnpj === '66666666666666' || cnpj === '77777777777777' || cnpj === '88888888888888' || cnpj === '99999999999999') {
    return false;
  }

  var size = cnpj.length - 2;
  var numbers = cnpj.substring(0, size);
  var digits = cnpj.substring(size);
  var sum = 0;
  var pos = size - 7;
  for (var i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i), 10) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  var resultado = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (resultado !== parseInt(digits.charAt(0), 10)) {
    return false;
  }

  size += 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (var _i2 = size; _i2 >= 1; _i2--) {
    sum += parseInt(numbers.charAt(size - _i2), 10) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  resultado = sum % 11 < 2 ? 0 : 11 - sum % 11;
  return resultado === parseInt(digits.charAt(1), 10);
}

function undefinedOrNull(field) {
  return field === undefined || field === null;
}

function validateField(fieldValue, validationFn) {
  return validationFn(fieldValue);
}

function validateDateFormat(field, format) {
  return (0, _moment2.default)(field, format, true).isValid();
}

function validateStringLength(field, max, min) {
  return field.length < max && (min !== undefined && field.length > min || min === undefined);
}

function calcDvMod11(data) {
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    sum += parseInt(data[i], 10) * (data.length - i + 1);
  }
  return sum % 11;
}

function calcDvMod11Sub11(data) {
  var c = calcDvMod11(data);
  return c > 0 ? 11 - c : 0;
}

function calcDvAgencia(branchNumber) {
  return calcDvMod11Sub11(branchNumber.padLeft(4, '0'));
}

function calcDvConta(accountNumber) {
  return calcDvMod11(accountNumber.toString());
}

function calcDvMod10(data) {
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    var partial = parseInt(data[i], 10) * (i % 2 + 1);
    if (partial > 9) {
      partial = partial.toString().split('').map(function (c) {
        return parseInt(c, 10);
      }).reduce(function (a, b) {
        return a + b;
      });
    }
    sum += partial;
  }
  sum %= 10;
  sum = sum !== 0 ? 10 - sum : sum;

  return sum;
}

function cleanUndefinedMembers(obj) {
  Object.keys(obj).forEach(function (key) {
    if (obj[key] && _typeof(obj[key]) === 'object') {
      cleanUndefinedMembers(obj[key]);
    } else if (obj[key] === undefined) {
      delete obj[key];
    }
  });

  return obj;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy92YWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbImlzUnVubmluZ0luTm9kZUpTIiwibm9ybWFsaXplWE1MSlNPYmplY3RQcm9wZXJ0aWVzIiwidmFsaWRhdGVFbWFpbCIsInZhbGlkYXRlQ1BGIiwidmFsaWRhdGVDTlBKIiwidW5kZWZpbmVkT3JOdWxsIiwidmFsaWRhdGVGaWVsZCIsInZhbGlkYXRlRGF0ZUZvcm1hdCIsInZhbGlkYXRlU3RyaW5nTGVuZ3RoIiwiY2FsY0R2TW9kMTEiLCJjYWxjRHZNb2QxMVN1YjExIiwiY2FsY0R2QWdlbmNpYSIsImNhbGNEdkNvbnRhIiwiY2FsY0R2TW9kMTAiLCJjbGVhblVuZGVmaW5lZE1lbWJlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwib2JqIiwia2V5cyIsIk9iamVjdCIsIm5PYmoiLCJpIiwibGVuZ3RoIiwiayIsInQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0b0xvd2VyQ2FzZSIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiY3BmTyIsInN1bSIsImhhc2giLCJ1bmRlZmluZWQiLCJjcGYiLCJyZXBsYWNlIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJjbnBqTyIsImNucGoiLCJzaXplIiwibnVtYmVycyIsImRpZ2l0cyIsInBvcyIsImNoYXJBdCIsInJlc3VsdGFkbyIsImZpZWxkIiwiZmllbGRWYWx1ZSIsInZhbGlkYXRpb25GbiIsImZvcm1hdCIsImlzVmFsaWQiLCJtYXgiLCJtaW4iLCJkYXRhIiwiYyIsImJyYW5jaE51bWJlciIsInBhZExlZnQiLCJhY2NvdW50TnVtYmVyIiwidG9TdHJpbmciLCJwYXJ0aWFsIiwic3BsaXQiLCJtYXAiLCJyZWR1Y2UiLCJhIiwiYiIsImZvckVhY2giLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs4UUFBQTtBQUNBOzs7OztRQU9nQkEsaUIsR0FBQUEsaUI7UUFFQUMsOEIsR0FBQUEsOEI7UUFpQkFDLGEsR0FBQUEsYTtRQUtBQyxXLEdBQUFB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YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDIwLzA0LzE3LlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1J1bm5pbmdJbk5vZGVKUygpIHsgcmV0dXJuIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVYTUxKU09iamVjdFByb3BlcnRpZXMob2JqOiBPYmplY3QpIDogT2JqZWN0IHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGNvbnN0IG5PYmogPSB7fTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgayA9IGtleXNbaV07XG4gICAgaWYgKHR5cGVvZiBvYmpba10gPT09ICdvYmplY3QnKSB7XG4gICAgICBub3JtYWxpemVYTUxKU09iamVjdFByb3BlcnRpZXMob2JqW2tdKTtcbiAgICB9XG4gICAgY29uc3QgdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqW2tdWzBdKSk7XG4gICAgaWYgKHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBuT2JqW2sudG9Mb3dlckNhc2UoKV0gPSB0ICE9PSAnTlVMTCcgPyB0IDogbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbk9iajtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWw6IHN0cmluZykge1xuICBjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICByZXR1cm4gcmUudGVzdChlbWFpbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNQRihjcGZPOiBzdHJpbmcpIDogYm9vbGVhbiB7XG4gIGxldCBzdW0gPSAwO1xuICBsZXQgaGFzaDtcblxuICBpZiAoY3BmTyA9PT0gdW5kZWZpbmVkIHx8IGNwZk8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjcGYgPSBjcGZPLnJlcGxhY2UoL1teXFxkXSsvZywgJycpO1xuXG4gIGlmIChjcGYubGVuZ3RoICE9PSAnMDAwMDAwMDAwMDAnLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChjcGYgPT09ICcwMDAwMDAwMDAwMCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICBzdW0gKz0gcGFyc2VJbnQoY3BmLnN1YnN0cmluZyhpIC0gMSwgaSksIDEwKSAqICgxMSAtIGkpO1xuICB9XG5cbiAgaGFzaCA9IChzdW0gKiAxMCkgJSAxMTtcblxuICBpZiAoKGhhc2ggPT09IDEwKSB8fCAoaGFzaCA9PT0gMTEpKSB7XG4gICAgaGFzaCA9IDA7XG4gIH1cblxuICBpZiAoaGFzaCAhPT0gcGFyc2VJbnQoY3BmLnN1YnN0cmluZyg5LCAxMCksIDEwKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFZlcmlmaWNhdGlvbiBkaWdpdFxuICBzdW0gPSAwO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgc3VtICs9IHBhcnNlSW50KGNwZi5zdWJzdHJpbmcoaSAtIDEsIGkpLCAxMCkgKiAoMTIgLSBpKTtcbiAgfVxuXG4gIGhhc2ggPSAoc3VtICogMTApICUgMTE7XG5cbiAgaWYgKChoYXNoID09PSAxMCkgfHwgKGhhc2ggPT09IDExKSkge1xuICAgIGhhc2ggPSAwO1xuICB9XG5cbiAgcmV0dXJuIGhhc2ggPT09IHBhcnNlSW50KGNwZi5zdWJzdHJpbmcoMTAsIDExKSwgMTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDTlBKKGNucGpPOiBzdHJpbmcpIDogYm9vbGVhbiB7XG4gIGlmIChjbnBqTyA9PT0gdW5kZWZpbmVkIHx8IGNucGpPID09PSBudWxsIHx8IGNucGpPLmxlbmd0aCAhPT0gMTQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjbnBqID0gY25wak8ucmVwbGFjZSgvW15cXGRdKy9nLCAnJyk7XG5cbiAgaWYgKFxuICAgIGNucGoubGVuZ3RoID09PSAwIHx8XG4gICAgY25wai5sZW5ndGggIT09IDE0IHx8XG4gICAgY25waiA9PT0gJzAwMDAwMDAwMDAwMDAwJyB8fFxuICAgIGNucGogPT09ICcxMTExMTExMTExMTExMScgfHxcbiAgICBjbnBqID09PSAnMjIyMjIyMjIyMjIyMjInIHx8XG4gICAgY25waiA9PT0gJzMzMzMzMzMzMzMzMzMzJyB8fFxuICAgIGNucGogPT09ICc0NDQ0NDQ0NDQ0NDQ0NCcgfHxcbiAgICBjbnBqID09PSAnNTU1NTU1NTU1NTU1NTUnIHx8XG4gICAgY25waiA9PT0gJzY2NjY2NjY2NjY2NjY2JyB8fFxuICAgIGNucGogPT09ICc3Nzc3Nzc3Nzc3Nzc3NycgfHxcbiAgICBjbnBqID09PSAnODg4ODg4ODg4ODg4ODgnIHx8XG4gICAgY25waiA9PT0gJzk5OTk5OTk5OTk5OTk5J1xuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsZXQgc2l6ZSA9IGNucGoubGVuZ3RoIC0gMjtcbiAgbGV0IG51bWJlcnMgPSBjbnBqLnN1YnN0cmluZygwLCBzaXplKTtcbiAgY29uc3QgZGlnaXRzID0gY25wai5zdWJzdHJpbmcoc2l6ZSk7XG4gIGxldCBzdW0gPSAwO1xuICBsZXQgcG9zID0gc2l6ZSAtIDc7XG4gIGZvciAobGV0IGkgPSBzaXplOyBpID49IDE7IGktLSkge1xuICAgIHN1bSArPSBwYXJzZUludChudW1iZXJzLmNoYXJBdChzaXplIC0gaSksIDEwKSAqIHBvcy0tO1xuICAgIGlmIChwb3MgPCAyKSB7XG4gICAgICBwb3MgPSA5O1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXN1bHRhZG8gPSBzdW0gJSAxMSA8IDIgPyAwIDogMTEgLSAoc3VtICUgMTEpO1xuICBpZiAocmVzdWx0YWRvICE9PSBwYXJzZUludChkaWdpdHMuY2hhckF0KDApLCAxMCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzaXplICs9IDE7XG4gIG51bWJlcnMgPSBjbnBqLnN1YnN0cmluZygwLCBzaXplKTtcbiAgc3VtID0gMDtcbiAgcG9zID0gc2l6ZSAtIDc7XG5cbiAgZm9yIChsZXQgaSA9IHNpemU7IGkgPj0gMTsgaS0tKSB7XG4gICAgc3VtICs9IHBhcnNlSW50KG51bWJlcnMuY2hhckF0KHNpemUgLSBpKSwgMTApICogcG9zLS07XG4gICAgaWYgKHBvcyA8IDIpIHtcbiAgICAgIHBvcyA9IDk7XG4gICAgfVxuICB9XG4gIHJlc3VsdGFkbyA9IHN1bSAlIDExIDwgMiA/IDAgOiAxMSAtIChzdW0gJSAxMSk7XG4gIHJldHVybiByZXN1bHRhZG8gPT09IHBhcnNlSW50KGRpZ2l0cy5jaGFyQXQoMSksIDEwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZGVmaW5lZE9yTnVsbChmaWVsZDogYW55KSB7XG4gIHJldHVybiBmaWVsZCA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkID09PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZChmaWVsZFZhbHVlOiBhbnksIHZhbGlkYXRpb25GbjogYW55KSA6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsaWRhdGlvbkZuKGZpZWxkVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVEYXRlRm9ybWF0KGZpZWxkOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKSB7XG4gIHJldHVybiBtb21lbnQoZmllbGQsIGZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmdMZW5ndGgoZmllbGQ6IHN0cmluZywgbWF4OiBudW1iZXIsIG1pbjogbnVtYmVyIHwgdm9pZCkge1xuICByZXR1cm4gKGZpZWxkLmxlbmd0aCA8IG1heCkgJiYgKChtaW4gIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5sZW5ndGggPiBtaW4pIHx8IG1pbiA9PT0gdW5kZWZpbmVkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNEdk1vZDExKGRhdGE6IHN0cmluZykge1xuICBsZXQgc3VtID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgc3VtICs9IChwYXJzZUludChkYXRhW2ldLCAxMCkgKiAoKGRhdGEubGVuZ3RoIC0gaSkgKyAxKSk7XG4gIH1cbiAgcmV0dXJuIHN1bSAlIDExO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY0R2TW9kMTFTdWIxMShkYXRhOiBzdHJpbmcpIHtcbiAgY29uc3QgYyA9IGNhbGNEdk1vZDExKGRhdGEpO1xuICByZXR1cm4gYyA+IDAgPyAxMSAtIGMgOiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY0R2QWdlbmNpYShicmFuY2hOdW1iZXI6IG51bWJlcnxzdHJpbmcpIHtcbiAgcmV0dXJuIGNhbGNEdk1vZDExU3ViMTEoYnJhbmNoTnVtYmVyLnBhZExlZnQoNCwgJzAnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjRHZDb250YShhY2NvdW50TnVtYmVyOiBudW1iZXJ8c3RyaW5nKSB7XG4gIHJldHVybiBjYWxjRHZNb2QxMShhY2NvdW50TnVtYmVyLnRvU3RyaW5nKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY0R2TW9kMTAoZGF0YTogc3RyaW5nKSB7XG4gIGxldCBzdW0gPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcGFydGlhbCA9IChwYXJzZUludChkYXRhW2ldLCAxMCkgKiAoKGkgJSAyKSArIDEpKTtcbiAgICBpZiAocGFydGlhbCA+IDkpIHtcbiAgICAgIHBhcnRpYWwgPSBwYXJ0aWFsLnRvU3RyaW5nKCkuc3BsaXQoJycpLm1hcChjID0+IHBhcnNlSW50KGMsIDEwKSkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XG4gICAgfVxuICAgIHN1bSArPSBwYXJ0aWFsO1xuICB9XG4gIHN1bSAlPSAxMDtcbiAgc3VtID0gc3VtICE9PSAwID8gMTAgLSBzdW0gOiBzdW07XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuVW5kZWZpbmVkTWVtYmVycyhvYmopIHtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAob2JqW2tleV0gJiYgdHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgY2xlYW5VbmRlZmluZWRNZW1iZXJzKG9ialtrZXldKTtcbiAgICB9IGVsc2UgaWYgKG9ialtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBvYmo7XG59XG4iXX0=