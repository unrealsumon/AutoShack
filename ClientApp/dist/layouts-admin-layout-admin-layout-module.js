(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/luxon/build/cjs-browser/luxon.js":
/*!*******************************************************!*\
  !*** ./node_modules/luxon/build/cjs-browser/luxon.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(LuxonError, _Error);

  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }

  return LuxonError;
}(_wrapNativeSuper(Error));
/**
 * @private
 */


var InvalidDateTimeError =
/*#__PURE__*/
function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
  }

  return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */

var InvalidIntervalError =
/*#__PURE__*/
function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
  }

  return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */

var InvalidDurationError =
/*#__PURE__*/
function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
  }

  return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */

var ConflictingSpecificationError =
/*#__PURE__*/
function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }

  return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */

var InvalidUnitError =
/*#__PURE__*/
function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }

  return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */

var InvalidArgumentError =
/*#__PURE__*/
function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }

  return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */

var ZoneIsAbstractError =
/*#__PURE__*/
function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }

  return ZoneIsAbstractError;
}(LuxonError);

/**
 * @private
 */
var n = "numeric",
    s = "short",
    l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */

var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */

var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: s
};
/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */

var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: l
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};

/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/
/**
 * @private
 */
// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES

function hasIntl() {
  try {
    return typeof Intl !== "undefined" && Intl.DateTimeFormat;
  } catch (e) {
    return false;
  }
}
function hasFormatToParts() {
  return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
} // OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x

function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }

  if (input.toString().length < n) {
    return ("0".repeat(n) + input).slice(-n);
  } else {
    return input.toString();
  }
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}
function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero) {
  if (towardZero === void 0) {
    towardZero = false;
  }

  var factor = Math.pow(10, digits),
      rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
} // DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)

function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  return +d;
}
function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }

  var date = new Date(ts),
      intlOpts = {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = Object.assign({
    timeZoneName: offsetFormat
  }, intlOpts),
      intl = hasIntl();

  if (intl && hasFormatToParts()) {
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
      return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
  } else if (intl) {
    // this probably doesn't work for all locales
    var without = new Intl.DateTimeFormat(locale, intlOpts).format(date),
        included = new Intl.DateTimeFormat(locale, modified).format(date),
        diffed = included.substring(without.length),
        trimmed = diffed.replace(/^[, \u200e]+/, "");
    return trimmed;
  } else {
    return null;
  }
} // signedOffset('-5', '30') -> -330

function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0

  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  var offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION

function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
  return numericValue;
}
function normalizeObject(obj, normalizer, nonUnitKeys) {
  var normalized = {};

  for (var u in obj) {
    if (hasOwnProperty(obj, u)) {
      if (nonUnitKeys.indexOf(u) >= 0) continue;
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }

  return normalized;
}
function formatOffset(offset, format) {
  var hours = Math.trunc(offset / 60),
      minutes = Math.abs(offset % 60),
      sign = hours >= 0 && !Object.is(hours, -0) ? "+" : "-",
      base = "" + sign + Math.abs(hours);

  switch (format) {
    case "short":
      return "" + sign + padStart(Math.abs(hours), 2) + ":" + padStart(minutes, 2);

    case "narrow":
      return minutes > 0 ? base + ":" + minutes : base;

    case "techie":
      return "" + sign + padStart(Math.abs(hours), 2) + padStart(minutes, 2);

    default:
      throw new RangeError("Value format " + format + " is out of range for property format");
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}
/**
 * @private
 */


var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return monthsNarrow;

    case "short":
      return monthsShort;

    case "long":
      return monthsLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}
var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return weekdaysNarrow;

    case "short":
      return weekdaysShort;

    case "long":
      return weekdaysLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return erasNarrow;

    case "short":
      return erasShort;

    case "long":
      return erasLong;

    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
  if (numeric === void 0) {
    numeric = "always";
  }

  if (narrow === void 0) {
    narrow = false;
  }

  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";

    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];

      case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];

      case 0:
        return isDay ? "today" : "this " + units[unit][0];

      default: // fall through

    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
      fmtValue = Math.abs(count),
      singular = fmtValue === 1,
      lilUnits = units[unit],
      fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}
function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]),
      key = stringify(filtered),
      dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";

  switch (key) {
    case stringify(DATE_SHORT):
      return "M/d/yyyy";

    case stringify(DATE_MED):
      return "LLL d, yyyy";

    case stringify(DATE_FULL):
      return "LLLL d, yyyy";

    case stringify(DATE_HUGE):
      return "EEEE, LLLL d, yyyy";

    case stringify(TIME_SIMPLE):
      return "h:mm a";

    case stringify(TIME_WITH_SECONDS):
      return "h:mm:ss a";

    case stringify(TIME_WITH_SHORT_OFFSET):
      return "h:mm a";

    case stringify(TIME_WITH_LONG_OFFSET):
      return "h:mm a";

    case stringify(TIME_24_SIMPLE):
      return "HH:mm";

    case stringify(TIME_24_WITH_SECONDS):
      return "HH:mm:ss";

    case stringify(TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";

    case stringify(TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";

    case stringify(DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";

    case stringify(DATETIME_MED):
      return "LLL d, yyyy, h:mm a";

    case stringify(DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";

    case stringify(DATETIME_HUGE):
      return dateTimeHuge;

    case stringify(DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";

    case stringify(DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";

    default:
      return dateTimeHuge;
  }
}

function stringifyTokens(splits, tokenToString) {
  var s = "";

  for (var _iterator = splits, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var token = _ref;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }

  return s;
}

var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */

var Formatter =
/*#__PURE__*/
function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new Formatter(locale, opts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
        currentFull = "",
        bracketed = false;
    var splits = [];

    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);

      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed,
            val: currentFull
          });
        }

        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: false,
            val: currentFull
          });
        }

        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed,
        val: currentFull
      });
    }

    return splits;
  };

  Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
    return _macroTokenToFormatOpts[token];
  };

  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  var _proto = Formatter.prototype;

  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }

    var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.formatToParts();
  };

  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.resolvedOptions();
  };

  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    }

    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = Object.assign({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === "en",
        useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && hasFormatToParts(),
        string = function string(opts, extract) {
      return _this.loc.extract(dt, opts, extract);
    },
        formatOffset = function formatOffset(opts) {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }

      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    },
        meridiem = function meridiem() {
      return knownEnglish ? meridiemForDateTime(dt) : string({
        hour: "numeric",
        hour12: true
      }, "dayperiod");
    },
        month = function month(length, standalone) {
      return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
        month: length
      } : {
        month: length,
        day: "numeric"
      }, "month");
    },
        weekday = function weekday(length, standalone) {
      return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
        weekday: length
      } : {
        weekday: length,
        month: "long",
        day: "numeric"
      }, "weekday");
    },
        maybeMacro = function maybeMacro(token) {
      var formatOpts = Formatter.macroTokenToFormatOpts(token);

      if (formatOpts) {
        return _this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    },
        era = function era(length) {
      return knownEnglish ? eraForDateTime(dt, length) : string({
        era: length
      }, "era");
    },
        tokenToString = function tokenToString(token) {
      // Where possible: http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles
      switch (token) {
        // ms
        case "S":
          return _this.num(dt.millisecond);

        case "u": // falls through

        case "SSS":
          return _this.num(dt.millisecond, 3);
        // seconds

        case "s":
          return _this.num(dt.second);

        case "ss":
          return _this.num(dt.second, 2);
        // minutes

        case "m":
          return _this.num(dt.minute);

        case "mm":
          return _this.num(dt.minute, 2);
        // hours

        case "h":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

        case "hh":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

        case "H":
          return _this.num(dt.hour);

        case "HH":
          return _this.num(dt.hour, 2);
        // offset

        case "Z":
          // like +6
          return formatOffset({
            format: "narrow",
            allowZ: _this.opts.allowZ
          });

        case "ZZ":
          // like +06:00
          return formatOffset({
            format: "short",
            allowZ: _this.opts.allowZ
          });

        case "ZZZ":
          // like +0600
          return formatOffset({
            format: "techie",
            allowZ: false
          });

        case "ZZZZ":
          // like EST
          return dt.zone.offsetName(dt.ts, {
            format: "short",
            locale: _this.loc.locale
          });

        case "ZZZZZ":
          // like Eastern Standard Time
          return dt.zone.offsetName(dt.ts, {
            format: "long",
            locale: _this.loc.locale
          });
        // zone

        case "z":
          // like America/New_York
          return dt.zoneName;
        // meridiems

        case "a":
          return meridiem();
        // dates

        case "d":
          return useDateTimeFormatter ? string({
            day: "numeric"
          }, "day") : _this.num(dt.day);

        case "dd":
          return useDateTimeFormatter ? string({
            day: "2-digit"
          }, "day") : _this.num(dt.day, 2);
        // weekdays - standalone

        case "c":
          // like 1
          return _this.num(dt.weekday);

        case "ccc":
          // like 'Tues'
          return weekday("short", true);

        case "cccc":
          // like 'Tuesday'
          return weekday("long", true);

        case "ccccc":
          // like 'T'
          return weekday("narrow", true);
        // weekdays - format

        case "E":
          // like 1
          return _this.num(dt.weekday);

        case "EEE":
          // like 'Tues'
          return weekday("short", false);

        case "EEEE":
          // like 'Tuesday'
          return weekday("long", false);

        case "EEEEE":
          // like 'T'
          return weekday("narrow", false);
        // months - standalone

        case "L":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric",
            day: "numeric"
          }, "month") : _this.num(dt.month);

        case "LL":
          // like 01, doesn't seem to work
          return useDateTimeFormatter ? string({
            month: "2-digit",
            day: "numeric"
          }, "month") : _this.num(dt.month, 2);

        case "LLL":
          // like Jan
          return month("short", true);

        case "LLLL":
          // like January
          return month("long", true);

        case "LLLLL":
          // like J
          return month("narrow", true);
        // months - format

        case "M":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric"
          }, "month") : _this.num(dt.month);

        case "MM":
          // like 01
          return useDateTimeFormatter ? string({
            month: "2-digit"
          }, "month") : _this.num(dt.month, 2);

        case "MMM":
          // like Jan
          return month("short", false);

        case "MMMM":
          // like January
          return month("long", false);

        case "MMMMM":
          // like J
          return month("narrow", false);
        // years

        case "y":
          // like 2014
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year);

        case "yy":
          // like 14
          return useDateTimeFormatter ? string({
            year: "2-digit"
          }, "year") : _this.num(dt.year.toString().slice(-2), 2);

        case "yyyy":
          // like 0012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 4);

        case "yyyyyy":
          // like 000012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 6);
        // eras

        case "G":
          // like AD
          return era("short");

        case "GG":
          // like Anno Domini
          return era("long");

        case "GGGGG":
          return era("narrow");

        case "kk":
          return _this.num(dt.weekYear.toString().slice(-2), 2);

        case "kkkk":
          return _this.num(dt.weekYear, 4);

        case "W":
          return _this.num(dt.weekNumber);

        case "WW":
          return _this.num(dt.weekNumber, 2);

        case "o":
          return _this.num(dt.ordinal);

        case "ooo":
          return _this.num(dt.ordinal, 3);

        case "q":
          // like 1
          return _this.num(dt.quarter);

        case "qq":
          // like 01
          return _this.num(dt.quarter, 2);

        case "X":
          return _this.num(Math.floor(dt.ts / 1000));

        case "x":
          return _this.num(dt.ts);

        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
      switch (token[0]) {
        case "S":
          return "millisecond";

        case "s":
          return "second";

        case "m":
          return "minute";

        case "h":
          return "hour";

        case "d":
          return "day";

        case "M":
          return "month";

        case "y":
          return "year";

        default:
          return null;
      }
    },
        tokenToString = function tokenToString(lildur) {
      return function (token) {
        var mapped = tokenToField(token);

        if (mapped) {
          return _this2.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      };
    },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref2) {
      var literal = _ref2.literal,
          val = _ref2.val;
      return literal ? found : found.concat(val);
    }, []),
        collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
      return t;
    }));

    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
}();

var Invalid =
/*#__PURE__*/
function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  var _proto = Invalid.prototype;

  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };

  return Invalid;
}();

/**
 * @interface
 */

var Zone =
/*#__PURE__*/
function () {
  function Zone() {}

  var _proto = Zone.prototype;

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  ;

  _proto.formatOffset = function formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  ;

  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  ;

  _createClass(Zone, [{
    key: "type",

    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "universal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);

  return Zone;
}();

var singleton = null;
/**
 * Represents the local zone for this Javascript environment.
 * @implements {Zone}
 */

var LocalZone =
/*#__PURE__*/
function (_Zone) {
  _inheritsLoose(LocalZone, _Zone);

  function LocalZone() {
    return _Zone.apply(this, arguments) || this;
  }

  var _proto = LocalZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "local";
  }
  /** @override **/
  ;

  _createClass(LocalZone, [{
    key: "type",

    /** @override **/
    get: function get() {
      return "local";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      if (hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return "local";
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",

    /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */
    get: function get() {
      if (singleton === null) {
        singleton = new LocalZone();
      }

      return singleton;
    }
  }]);

  return LocalZone;
}(Zone);

var matchingRegex = RegExp("^" + ianaRegex.source + "$");
var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      fMonth = parsed[1],
      fDay = parsed[2],
      fYear = parsed[3],
      fHour = parsed[4],
      fMinute = parsed[5],
      fSecond = parsed[6];
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];

    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */

var IANAZone =
/*#__PURE__*/
function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);

  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  IANAZone.create = function create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }

    return ianaZoneCache[name];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  ;

  IANAZone.resetCache = function resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return !!(s && s.match(matchingRegex));
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidZone = function isValidZone(zone) {
    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  } // Etc/GMT+8 -> -480

  /** @ignore */
  ;

  IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
    if (specifier) {
      var match = specifier.match(/^Etc\/GMT([+-]\d{1,2})$/i);

      if (match) {
        return -60 * parseInt(match[1]);
      }
    }

    return null;
  };

  function IANAZone(name) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.zoneName = name;
    /** @private **/

    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }
  /** @override **/


  var _proto = IANAZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    var date = new Date(ts),
        dtf = makeDTF(this.name),
        _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        year = _ref2[0],
        month = _ref2[1],
        day = _ref2[2],
        hour = _ref2[3],
        minute = _ref2[4],
        second = _ref2[5],
        adjustedHour = hour === 24 ? 0 : hour;

    var asUTC = objToLocalTS({
      year: year,
      month: month,
      day: day,
      hour: adjustedHour,
      minute: minute,
      second: second,
      millisecond: 0
    });
    var asTS = date.valueOf();
    asTS -= asTS % 1000;
    return (asUTC - asTS) / (60 * 1000);
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /** @override **/
  ;

  _createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);

  return IANAZone;
}(Zone);

var singleton$1 = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */

var FixedOffsetZone =
/*#__PURE__*/
function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  ;

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }

    return null;
  };

  _createClass(FixedOffsetZone, null, [{
    key: "utcInstance",

    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    get: function get() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }

      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.fixed = offset;
    return _this;
  }
  /** @override **/


  var _proto = FixedOffsetZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return this.name;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /** @override **/
  ;

  /** @override **/
  _proto.offset = function offset() {
    return this.fixed;
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /** @override **/
  ;

  _createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
    }
  }, {
    key: "universal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }]);

  return FixedOffsetZone;
}(Zone);

/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */

var InvalidZone =
/*#__PURE__*/
function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);

  function InvalidZone(zoneName) {
    var _this;

    _this = _Zone.call(this) || this;
    /**  @private */

    _this.zoneName = zoneName;
    return _this;
  }
  /** @override **/


  var _proto = InvalidZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return null;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset() {
    return "";
  }
  /** @override **/
  ;

  _proto.offset = function offset() {
    return NaN;
  }
  /** @override **/
  ;

  _proto.equals = function equals() {
    return false;
  }
  /** @override **/
  ;

  _createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);

  return InvalidZone;
}(Zone);

/**
 * @private
 */
function normalizeZone(input, defaultZone) {
  var offset;

  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local") return defaultZone;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
      // handle Etc/GMT-4, which V8 chokes on
      return FixedOffsetZone.instance(offset);
    } else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
  return Date.now();
},
    defaultZone = null,
    // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid = false;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */


var Settings =
/*#__PURE__*/
function () {
  function Settings() {}

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  };

  _createClass(Settings, null, [{
    key: "now",

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    ,
    set: function set(n) {
      now = n;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: "defaultZoneName",
    get: function get() {
      return Settings.defaultZone.name;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(z) {
      if (!z) {
        defaultZone = null;
      } else {
        defaultZone = normalizeZone(z);
      }
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: "defaultZone",
    get: function get() {
      return defaultZone || LocalZone.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);

  return Settings;
}();

var intlDTCache = {};

function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachedINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var intlRelCache = {};

function getCachedRTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlRelCache[key];

  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (hasIntl()) {
    var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb

    sysLocaleCache = !computedSys || computedSys === "und" ? "en-US" : computedSys;
    return sysLocaleCache;
  } else {
    sysLocaleCache = "en-US";
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
        numberingSystem = _options.numberingSystem,
        calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (hasIntl()) {
    if (outputCalendar || numberingSystem) {
      localeStr += "-u";

      if (outputCalendar) {
        localeStr += "-ca-" + outputCalendar;
      }

      if (numberingSystem) {
        localeStr += "-nu-" + numberingSystem;
      }

      return localeStr;
    } else {
      return localeStr;
    }
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
/**
 * @private
 */


var PolyNumberFormatter =
/*#__PURE__*/
function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    if (!forceSimple && hasIntl()) {
      var intlOpts = {
        useGrouping: false
      };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  var _proto = PolyNumberFormatter.prototype;

  _proto.format = function format(i) {
    if (this.inf) {
      var fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

      return padStart(_fixed, this.padTo);
    }
  };

  return PolyNumberFormatter;
}();
/**
 * @private
 */


var PolyDateFormatter =
/*#__PURE__*/
function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    this.hasIntl = hasIntl();
    var z;

    if (dt.zone.universal && this.hasIntl) {
      // Chromium doesn't support fixed-offset zones like Etc/GMT+8 in its formatter,
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=364374.
      // So we have to make do. Two cases:
      // 1. The format options tell us to show the zone. We can't do that, so the best
      // we can do is format the date in UTC.
      // 2. The format options don't tell us to show the zone. Then we can adjust them
      // the time and tell the formatter to show it to us in UTC, so that the time is right
      // and the bad zone doesn't show up.
      // We can clean all this up when Chrome fixes this.
      z = "UTC";

      if (opts.timeZoneName) {
        this.dt = dt;
      } else {
        this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
      }
    } else if (dt.zone.type === "local") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var intlOpts = Object.assign({}, this.opts);

      if (z) {
        intlOpts.timeZone = z;
      }

      this.dtf = getCachedDTF(intl, intlOpts);
    }
  }

  var _proto2 = PolyDateFormatter.prototype;

  _proto2.format = function format() {
    if (this.hasIntl) {
      return this.dtf.format(this.dt.toJSDate());
    } else {
      var tokenFormat = formatString(this.opts),
          loc = Locale.create("en-US");
      return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
    }
  };

  _proto2.formatToParts = function formatToParts() {
    if (this.hasIntl && hasFormatToParts()) {
      return this.dtf.formatToParts(this.dt.toJSDate());
    } else {
      // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
      // and IMO it's too weird to have an uncanny valley like that
      return [];
    }
  };

  _proto2.resolvedOptions = function resolvedOptions() {
    if (this.hasIntl) {
      return this.dtf.resolvedOptions();
    } else {
      return {
        locale: "en-US",
        numberingSystem: "latn",
        outputCalendar: "gregory"
      };
    }
  };

  return PolyDateFormatter;
}();
/**
 * @private
 */


var PolyRelFormatter =
/*#__PURE__*/
function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    this.opts = Object.assign({
      style: "long"
    }, opts);

    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  var _proto3 = PolyRelFormatter.prototype;

  _proto3.format = function format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  };

  _proto3.formatToParts = function formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  };

  return PolyRelFormatter;
}();
/**
 * @private
 */


var Locale =
/*#__PURE__*/
function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };

  Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }

    var specifiedLocale = locale || Settings.defaultLocale,
        // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()),
        numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
        outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  };

  Locale.fromObject = function fromObject(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
        parsedLocale = _parseLocaleString[0],
        parsedNumberingSystem = _parseLocaleString[1],
        parsedOutputCalendar = _parseLocaleString[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  var _proto4 = Locale.prototype;

  _proto4.listingMode = function listingMode(defaultOK) {
    if (defaultOK === void 0) {
      defaultOK = true;
    }

    var intl = hasIntl(),
        hasFTP = intl && hasFormatToParts(),
        isActuallyEn = this.isEnglish(),
        hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");

    if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) {
      return "error";
    } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
      return "en";
    } else {
      return "intl";
    }
  };

  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };

  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: true
    }));
  };

  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: false
    }));
  };

  _proto4.months = function months$1(length, format, defaultOK) {
    var _this = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? {
        month: length,
        day: "numeric"
      } : {
        month: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, "month");
        });
      }

      return _this.monthsCache[formatStr][length];
    });
  };

  _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
    var _this2 = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? {
        weekday: length,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, "weekday");
        });
      }

      return _this2.weekdaysCache[formatStr][length];
    });
  };

  _proto4.meridiems = function meridiems$1(defaultOK) {
    var _this3 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this3.meridiemCache) {
        var intl = {
          hour: "numeric",
          hour12: true
        };
        _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this3.extract(dt, intl, "dayperiod");
        });
      }

      return _this3.meridiemCache;
    });
  };

  _proto4.eras = function eras$1(length, defaultOK) {
    var _this4 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length
      }; // This is utter bullshit. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.

      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this4.extract(dt, intl, "era");
        });
      }

      return _this4.eraCache[length];
    });
  };

  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
      return m.type.toLowerCase() === field;
    });
    return matching ? matching.value : null;
  };

  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  };

  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  _proto4.relFormatter = function relFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  };

  _proto4.isEnglish = function isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  };

  _proto4.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };

  _createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }

      return this.fastNumbersCached;
    }
  }]);

  return Locale;
}();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
          mergedZone = _ref[1],
          cursor = _ref[2];

      var _ex = ex(m, cursor),
          val = _ex[0],
          zone = _ex[1],
          next = _ex[2];

      return [Object.assign(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var _patterns$_i = _patterns[_i],
        regex = _patterns$_i[0],
        extractor = _patterns$_i[1];
    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing


var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?/,
    isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"),
    isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
    extractISOOrdinalData = simpleParse("year", "ordinal"),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"),
    sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

function int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  var item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hour: int(match, cursor, 0),
    minute: int(match, cursor + 1, 0),
    second: int(match, cursor + 2, 0),
    millisecond: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO duration parsing


var isoDuration = /^P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function extractISODuration(match) {
  var yearStr = match[1],
      monthStr = match[2],
      weekStr = match[3],
      dayStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      millisecondsStr = match[8];
  return [{
    years: parseInteger(yearStr),
    months: parseInteger(monthStr),
    weeks: parseInteger(weekStr),
    days: parseInteger(dayStr),
    hours: parseInteger(hourStr),
    minutes: parseInteger(minuteStr),
    seconds: parseInteger(secondStr),
    milliseconds: parseMillis(millisecondsStr)
  }];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that


var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);

  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      obsOffset = match[8],
      milOffset = match[9],
      offHourStr = match[10],
      offMinuteStr = match[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date


var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      yearStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
var extractISOOrdinalDataAndTime = combineExtractors(extractISOOrdinalData, extractISOTime);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
/**
 * @private
 */

function parseISODate(s) {
  return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDataAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
  return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}

var INVALID = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000
  },
  seconds: {
    milliseconds: 1000
  }
},
    casualMatrix = Object.assign({
  years: {
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = Object.assign({
  years: {
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix); // units ordered by size

var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  }

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters


function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      raw = fromMap[fromUnit] / conv,
      sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
      // ok, so this is wild, but see the matrix in the tests
  added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters


function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */


var Duration =
/*#__PURE__*/
function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject(Object.assign({
      milliseconds: count
    }, opts));
  }
  /**
   * Create a Duration from a Javascript object with keys like 'years' and 'hours.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  Duration.fromObject = function fromObject(obj) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone" // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: Locale.fromObject(obj),
      conversionAccuracy: obj.conversionAccuracy
    });
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  ;

  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
        parsed = _parseISODuration[0];

    if (parsed) {
      var obj = Object.assign(parsed, opts);
      return Duration.fromObject(obj);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  ;

  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid
      });
    }
  }
  /**
   * @private
   */
  ;

  Duration.normalizeUnit = function normalizeUnit(unit) {
    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Duration.isDuration = function isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  ;

  var _proto = Duration.prototype;

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    var fmtOpts = Object.assign({}, opts, {
      floor: opts.round !== false && opts.floor !== false
    });
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a Javascript object with this Duration's values.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.values);

    if (opts.includeConfig) {
      base.conversionAccuracy = this.conversionAccuracy;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.as("milliseconds");
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration),
        result = {};

    for (var _i = 0, _orderedUnits = orderedUnits; _i < _orderedUnits.length; _i++) {
      var k = _orderedUnits[_i];

      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  ;

  _proto.mapUnits = function mapUnits(fn) {
    if (!this.isValid) return this;
    var result = {};

    for (var _i2 = 0, _Object$keys = Object.keys(this.values); _i2 < _Object$keys.length; _i2++) {
      var k = _Object$keys[_i2];
      result[k] = asNumber(fn(this.values[k], k));
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
   * @return {number}
   */
  ;

  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var mixed = Object.assign(this.values, normalizeObject(values, Duration.normalizeUnit, []));
    return clone(this, {
      values: mixed
    });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        conversionAccuracy = _ref.conversionAccuracy;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem
    }),
        opts = {
      loc: loc
    };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  ;

  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  ;

  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, {
      values: vals
    }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  ;

  _proto.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
        accumulated = {},
        vals = this.toObject();
    var lastUnit;
    normalizeValues(this.matrix, vals);

    for (var _i3 = 0, _orderedUnits2 = orderedUnits; _i3 < _orderedUnits2.length; _i3++) {
      var k = _orderedUnits2[_i3];

      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0; // anything we haven't boiled down yet should get boiled to this unit

        for (var ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        } // plus anything that's already in this unit


        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
        // plus anything further down the chain that should be rolled up in to this

        for (var down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        } // otherwise, keep it in the wings to boil it later

      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    } // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty


    for (var key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone(this, {
      values: built
    }, true).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  ;

  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};

    for (var _i4 = 0, _Object$keys2 = Object.keys(this.values); _i4 < _Object$keys2.length; _i4++) {
      var k = _Object$keys2[_i4];
      negated[k] = -this.values[k];
    }

    return clone(this, {
      values: negated
    }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  ;

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    for (var _i5 = 0, _orderedUnits3 = orderedUnits; _i5 < _orderedUnits3.length; _i5++) {
      var u = _orderedUnits3[_i5];

      if (this.values[u] !== other.values[u]) {
        return false;
      }
    }

    return true;
  };

  _createClass(Duration, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Duration;
}();
function friendlyDuration(durationish) {
  if (isNumber(durationish)) {
    return Duration.fromMillis(durationish);
  } else if (Duration.isDuration(durationish)) {
    return durationish;
  } else if (typeof durationish === "object") {
    return Duration.fromObject(durationish);
  } else {
    throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
  }
}

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}
 * * **Output** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toISODate}, {@link toISOTime}, {@link toFormat}, and {@link toDuration}.
 */


var Interval =
/*#__PURE__*/
function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */


  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid
      });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  ;

  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);
    var validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.after = function after(start, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.before = function before(end, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  ;

  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
        s = _split[0],
        e = _split[1];

    if (s && e) {
      var start = DateTime.fromISO(s, opts),
          end = DateTime.fromISO(e, opts);

      if (start.isValid && end.isValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (start.isValid) {
        var dur = Duration.fromISO(e, opts);

        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (end.isValid) {
        var _dur = Duration.fromISO(s, opts);

        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }

    return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed asISO 8601");
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Interval.isInterval = function isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  ;

  var _proto = Interval.prototype;

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  ;

  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(unit) {
    return this.isValid ? this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  ;

  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  ;

  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        start = _ref.start,
        end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {[Interval]}
   */
  ;

  _proto.splitAt = function splitAt() {
    var _this = this;

    if (!this.isValid) return [];

    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
      return _this.contains(d);
    }).sort(),
        results = [];
    var s = this.s,
        i = 0;

    while (s < this.e) {
      var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {[Interval]}
   */
  ;

  _proto.splitBy = function splitBy(duration) {
    var dur = friendlyDuration(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    var s = this.s,
        added,
        next;
    var results = [];

    while (s < this.e) {
      added = s.plus(dur);
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
    }

    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {[Interval]}
   */
  ;

  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;

    if (s > e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
      return a.s - b.s;
    }).reduce(function (_ref2, item) {
      var sofar = _ref2[0],
          current = _ref2[1];

      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]),
        found = _intervals$sort$reduc[0],
        final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }

    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
        currentCount = 0;

    var results = [],
        ends = intervals.map(function (i) {
      return [{
        time: i.s,
        type: "s"
      }, {
        time: i.e,
        type: "e"
      }];
    }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
        arr = flattened.sort(function (a, b) {
      return a.time - b.time;
    });

    for (var _iterator = arr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref3 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref3 = _i.value;
      }

      var i = _ref3;
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {[Interval]}
   */
  ;

  _proto.difference = function difference() {
    var _this2 = this;

    for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this2.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate() {
    if (!this.isValid) return INVALID$1;
    return this.s.toISODate() + "/" + this.e.toISODate();
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        _ref4$separator = _ref4.separator,
        separator = _ref4$separator === void 0 ? " – " : _ref4$separator;

    if (!this.isValid) return INVALID$1;
    return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  ;

  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }

    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  ;

  _proto.mapEndpoints = function mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  };

  _createClass(Interval, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */

var Info =
/*#__PURE__*/
function () {
  function Info() {}

  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }

    var proto = DateTime.local().setZone(zone).set({
      month: 12
    });
    return !zone.universal && proto.offset !== proto.set({
      month: 6
    }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  ;

  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone.isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  ;

  Info.normalizeZone = function normalizeZone$1(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {[string]}
   */
  ;

  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {[string]}
   */
  ;

  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {[string]}
   */
  ;

  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === void 0 ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @return {[string]}
   */
  ;

  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === void 0 ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {[string]}
   */
  ;

  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === void 0 ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {[string]}
   */
  ;

  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }

    var _ref6 = _temp6 === void 0 ? {} : _temp6,
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === void 0 ? null : _ref6$locale;

    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `zones`: whether this environment supports IANA timezones
   * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
   * * `intl`: whether this environment supports general internationalization
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
   * @return {Object}
   */
  ;

  Info.features = function features() {
    var intl = false,
        intlTokens = false,
        zones = false,
        relative = false;

    if (hasIntl()) {
      intl = true;
      intlTokens = hasFormatToParts();
      relative = hasRelative();

      try {
        zones = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch (e) {
        zones = false;
      }
    }

    return {
      intl: intl,
      intlTokens: intlTokens,
      zones: zones,
      relative: relative
    };
  };

  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, {
      keepLocalTime: true
    }).startOf("day").valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var lowestOrder, highWater;

  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = _differs[_i],
        unit = _differs$_i[0],
        differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

      if (highWater > later) {
        var _cursor$plus2;

        cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      cursor = _highOrderDiffs[0],
      results = _highOrderDiffs[1],
      highWater = _highOrderDiffs[2],
      lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus3;

      highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(Object.assign(results, opts));

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}; // eslint-disable-next-line

var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  var value = parseInt(str, 10);

  if (isNaN(value)) {
    value = "";

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = numberingSystemsUTF16[key],
              min = _numberingSystemsUTF[0],
              max = _numberingSystemsUTF[1];

          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }

    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex(_ref, append) {
  var numberingSystem = _ref.numberingSystem;

  if (append === void 0) {
    append = "";
  }

  return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }

  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseDigits(s));
    }
  };
}

function fixListRegex(s) {
  // make dots optional and also make them literal
  return s.replace(/\./, "\\.?");
}

function stripInsensitivities(s) {
  return s.replace(/\./, "").toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
          m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    }
  };
}

function escapeToken(value) {
  // eslint-disable-next-line no-useless-escape
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  var one = digitRegex(loc),
      two = digitRegex(loc, "{2}"),
      three = digitRegex(loc, "{3}"),
      four = digitRegex(loc, "{4}"),
      six = digitRegex(loc, "{6}"),
      oneOrTwo = digitRegex(loc, "{1,2}"),
      oneToThree = digitRegex(loc, "{1,3}"),
      oneToSix = digitRegex(loc, "{1,6}"),
      oneToNine = digitRegex(loc, "{1,9}"),
      twoToFour = digitRegex(loc, "{2,4}"),
      fourToSix = digitRegex(loc, "{4,6}"),
      literal = function literal(t) {
    return {
      regex: RegExp(escapeToken(t.val)),
      deser: function deser(_ref5) {
        var s = _ref5[0];
        return s;
      },
      literal: true
    };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);

      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years

      case "y":
        return intUnit(oneToSix);

      case "yy":
        return intUnit(twoToFour, untruncateYear);

      case "yyyy":
        return intUnit(four);

      case "yyyyy":
        return intUnit(fourToSix);

      case "yyyyyy":
        return intUnit(six);
      // months

      case "M":
        return intUnit(oneOrTwo);

      case "MM":
        return intUnit(two);

      case "MMM":
        return oneOf(loc.months("short", true, false), 1);

      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);

      case "L":
        return intUnit(oneOrTwo);

      case "LL":
        return intUnit(two);

      case "LLL":
        return oneOf(loc.months("short", false, false), 1);

      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      // dates

      case "d":
        return intUnit(oneOrTwo);

      case "dd":
        return intUnit(two);
      // ordinals

      case "o":
        return intUnit(oneToThree);

      case "ooo":
        return intUnit(three);
      // time

      case "HH":
        return intUnit(two);

      case "H":
        return intUnit(oneOrTwo);

      case "hh":
        return intUnit(two);

      case "h":
        return intUnit(oneOrTwo);

      case "mm":
        return intUnit(two);

      case "m":
        return intUnit(oneOrTwo);

      case "q":
        return intUnit(oneOrTwo);

      case "qq":
        return intUnit(two);

      case "s":
        return intUnit(oneOrTwo);

      case "ss":
        return intUnit(two);

      case "S":
        return intUnit(oneToThree);

      case "SSS":
        return intUnit(three);

      case "u":
        return simple(oneToNine);
      // meridiem

      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)

      case "kkkk":
        return intUnit(four);

      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)

      case "W":
        return intUnit(oneOrTwo);

      case "WW":
        return intUnit(two);
      // weekdays

      case "E":
      case "c":
        return intUnit(one);

      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone

      case "Z":
      case "ZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);

      case "ZZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are

      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);

      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}

var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};

function tokenForPart(part, locale, formatOpts) {
  var type = part.type,
      value = part.value;

  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }

  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];

  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val: val
    };
  }

  return undefined;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + "(" + r.source + ")";
  }, "");
  return ["^" + re + "$", units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      case "q":
        return "quarter";

      default:
        return null;
    }
  };

  var zone;

  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  } else {
    zone = null;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone];
}

var dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  var formatOpts = Formatter.macroTokenToFormatOpts(token.val);

  if (!formatOpts) {
    return token;
  }

  var formatter = Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  var tokens = parts.map(function (p) {
    return tokenForPart(p, locale, formatOpts);
  });

  if (tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function (t) {
    return maybeExpandMacroToken(t, locale);
  }));
}
/**
 * @private
 */


function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
        regexString = _buildRegex[0],
        handlers = _buildRegex[1],
        regex = RegExp(regexString, "i"),
        _match = match(input, regex, handlers),
        rawMatches = _match[0],
        matches = _match[1],
        _ref6 = matches ? dateTimeFromMatches(matches) : [null, null],
        result = _ref6[0],
        zone = _ref6[1];

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}
/**
 * @private
 */


function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return Object.assign({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day,
      ordinal = computeOrdinal(year, month, day);
  return Object.assign({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal,
      _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
      validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
      validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
      validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
      validMonth = integerBetween(obj.month, 1, 12),
      validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var hour = obj.hour,
      minute = obj.minute,
      second = obj.second,
      millisecond = obj.millisecond;
  var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
      validMinute = integerBetween(minute, 0, 59),
      validSecond = integerBetween(second, 0, 59),
      validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID$2 = "Invalid DateTime";
var MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
} // we cache week data on the DT object and this intermediates the cache


function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties


function clone$1(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(Object.assign({}, current, alts, {
    old: current
  }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset


  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset


function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
} // convert a calendar object to a epoch timestamp


function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs


function adjustTime(inst, dur) {
  var _dur;

  var keys = Object.keys(dur.values);

  if (keys.indexOf("milliseconds") === -1) {
    keys.push("milliseconds");
  }

  dur = (_dur = dur).shiftTo.apply(_dur, keys);
  var oPre = inst.o,
      year = inst.c.year + dur.years,
      month = inst.c.month + dur.months + dur.quarters * 3,
      c = Object.assign({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + dur.days + dur.weeks * 7
  }),
      millisToAdd = Duration.fromObject({
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      ts = _fixOffset[0],
      o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options


function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(Object.assign(parsed, opts, {
      zone: interpretationZone,
      // setZone is a valid option in the calling methods, but not in fromObject
      setZone: undefined
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details


function toTechFormat(dt, format) {
  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: true,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling


function toTechTimeFormat(dt, _ref) {
  var _ref$suppressSeconds = _ref.suppressSeconds,
      suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds,
      _ref$suppressMillisec = _ref.suppressMilliseconds,
      suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec,
      includeOffset = _ref.includeOffset,
      _ref$includeZone = _ref.includeZone,
      includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone,
      _ref$spaceZone = _ref.spaceZone,
      spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone;
  var fmt = "HH:mm";

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += ":ss";

    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }

  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += "ZZ";
  }

  return toTechFormat(dt, fmt);
} // defaults for unspecified units in the supported calendars


var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}; // Units in the supported calendars, sorted by bigness

var orderedUnits$1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

function normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.


function quickDT(obj, zone) {
  // assume we have the higher-order units
  for (var _i = 0, _orderedUnits = orderedUnits$1; _i < _orderedUnits.length; _i++) {
    var u = _orderedUnits[_i];

    if (isUndefined(obj[u])) {
      obj[u] = defaultUnitValues[u];
    }
  }

  var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

  if (invalid) {
    return DateTime.invalid(invalid);
  }

  var tsNow = Settings.now(),
      offsetProvis = zone.offset(tsNow),
      _objToTS = objToTS(obj, offsetProvis, zone),
      ts = _objToTS[0],
      o = _objToTS[1];

  return new DateTime({
    ts: ts,
    zone: zone,
    o: o
  });
}

function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
      format = function format(c, unit) {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    var formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  },
      differ = function differ(unit) {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (var _iterator = opts.units, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray) {
      if (_i2 >= _iterator.length) break;
      _ref2 = _iterator[_i2++];
    } else {
      _i2 = _iterator.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var unit = _ref2;
    var count = differ(unit);

    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }

  return format(0, opts.units[opts.units.length - 1]);
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */


var DateTime =
/*#__PURE__*/
function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone;
    var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
        o = null;

    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        var _ref3 = [config.old.c, config.old.o];
        c = _ref3[0];
        o = _ref3[1];
      } else {
        c = tsToObj(this.ts, zone.offset(this.ts));
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : zone.offset(this.ts);
      }
    }
    /**
     * @access private
     */


    this._zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */


  DateTime.local = function local(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now()
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, Settings.defaultZone);
    }
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
   * @return {DateTime}
   */
  ;

  DateTime.utc = function utc(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now(),
        zone: FixedOffsetZone.utcInstance
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, FixedOffsetZone.utcInstance);
    }
  }
  /**
   * Create a DateTime from a Javascript Date object. Uses the default zone.
   * @param {Date} date - a Javascript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  ;

  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }

    var ts = isDate(date) ? date.valueOf() : NaN;

    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError("fromMillis requires a numerical input");
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromSeconds = function fromSeconds(seconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a Javascript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [obj.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  ;

  DateTime.fromObject = function fromObject(obj) {
    var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    var tsNow = Settings.now(),
        offsetProvis = zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, normalizeUnit, ["zone", "locale", "outputCalendar", "numberingSystem"]),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = Locale.fromObject(obj); // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

    var units,
        defaultValues,
        objNow = tsToObj(tsNow, offsetProvis);

    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits$1;
      defaultValues = defaultUnitValues;
    } // set default values for missing stuff


    var foundFirst = false;

    for (var _iterator2 = units, _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray2) {
        if (_i3 >= _iterator2.length) break;
        _ref4 = _iterator2[_i3++];
      } else {
        _i3 = _iterator2.next();
        if (_i3.done) break;
        _ref4 = _i3.value;
      }

      var u = _ref4;
      var v = normalized[u];

      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    } // make sure the values we have are in range


    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    } // compute the actual time


    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
        tsFinal = _objToTS2[0],
        offsetFinal = _objToTS2[1],
        inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc: loc
    }); // gregorian data + weekday serves only to validate


    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
    }

    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  ;

  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseISODate = parseISODate(text),
        vals = _parseISODate[0],
        parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  ;

  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseRFC2822Date = parseRFC2822Date(text),
        vals = _parseRFC2822Date[0],
        parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  ;

  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseHTTPDate = parseHTTPDate(text),
        vals = _parseHTTPDate[0],
        parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }

    var _opts = opts,
        _opts$locale = _opts.locale,
        locale = _opts$locale === void 0 ? null : _opts$locale,
        _opts$numberingSystem = _opts.numberingSystem,
        numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        vals = _parseFromTokens[0],
        parsedZone = _parseFromTokens[1],
        invalid = _parseFromTokens[2];

    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  ;

  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  ;

  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseSQL = parseSQL(text),
        vals = _parseSQL[0],
        parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  ;

  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid
      });
    }
  }
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  DateTime.isDateTime = function isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  } // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  ;

  var _proto = DateTime.prototype;

  _proto.get = function get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  ;

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;

    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar
    };
  } // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  ;

  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  ;

  _proto.toLocal = function toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  ;

  _proto.setZone = function setZone(zone, _temp) {
    var _ref5 = _temp === void 0 ? {} : _temp,
        _ref5$keepLocalTime = _ref5.keepLocalTime,
        keepLocalTime = _ref5$keepLocalTime === void 0 ? false : _ref5$keepLocalTime,
        _ref5$keepCalendarTim = _ref5.keepCalendarTime,
        keepCalendarTime = _ref5$keepCalendarTim === void 0 ? false : _ref5$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);

    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = this.ts;

      if (keepLocalTime || keepCalendarTime) {
        var offsetGuess = this.o - zone.offset(this.ts);
        var asObj = this.toObject();

        var _objToTS3 = objToTS(asObj, offsetGuess, zone);

        newTS = _objToTS3[0];
      }

      return clone$1(this, {
        ts: newTS,
        zone: zone
      });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref6 = _temp2 === void 0 ? {} : _temp2,
        locale = _ref6.locale,
        numberingSystem = _ref6.numberingSystem,
        outputCalendar = _ref6.outputCalendar;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar
    });
    return clone$1(this, {
      loc: loc
    });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  ;

  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale
    });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit, []),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday);
    var mixed;

    if (settingWeekStuff) {
      mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = Object.assign(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month

      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS4 = objToTS(mixed, this.o, this.zone),
        ts = _objToTS4[0],
        o = _objToTS4[1];

    return clone$1(this, {
      ts: ts,
      o: o
    });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.local().plus(123) //~> in 123 milliseconds
   * @example DateTime.local().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.local().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.local().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.local().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.local().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration).negate();
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  ;

  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
        normalizedUnit = Duration.normalizeUnit(unit);

    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through

      case "quarters":
      case "months":
        o.day = 1;
      // falls through

      case "weeks":
      case "days":
        o.hour = 0;
      // falls through

      case "hours":
        o.minute = 0;
      // falls through

      case "minutes":
        o.second = 0;
      // falls through

      case "seconds":
        o.millisecond = 0;
        break;

      case "milliseconds":
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  ;

  _proto.endOf = function endOf(unit) {
    var _this$plus;

    return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
  } // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options
   * @example DateTime.local().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.local().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.local().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.local().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param opts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @example DateTime.local().toLocaleString(); //=> 4/20/2017
   * @example DateTime.local().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.local().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.local().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.local().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.local().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
   * @return {string}
   */
  ;

  _proto.toLocaleString = function toLocaleString(opts) {
    if (opts === void 0) {
      opts = DATE_SHORT;
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.local().toLocaleString(); //=> [
   *                                    //=>   { type: 'day', value: '25' },
   *                                    //=>   { type: 'literal', value: '/' },
   *                                    //=>   { type: 'month', value: '05' },
   *                                    //=>   { type: 'literal', value: '/' },
   *                                    //=>   { type: 'year', value: '1982' }
   *                                    //=> ]
   */
  ;

  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.local().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.local().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toISODate() + "T" + this.toISOTime(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate() {
    var format = "yyyy-MM-dd";

    if (this.year > 9999) {
      format = "+" + format;
    }

    return toTechFormat(this, format);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  ;

  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().hour(7).minute(34).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().hour(7).minute(34).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(_temp3) {
    var _ref7 = _temp3 === void 0 ? {} : _temp3,
        _ref7$suppressMillise = _ref7.suppressMilliseconds,
        suppressMilliseconds = _ref7$suppressMillise === void 0 ? false : _ref7$suppressMillise,
        _ref7$suppressSeconds = _ref7.suppressSeconds,
        suppressSeconds = _ref7$suppressSeconds === void 0 ? false : _ref7$suppressSeconds,
        _ref7$includeOffset = _ref7.includeOffset,
        includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset;

    return toTechTimeFormat(this, {
      suppressSeconds: suppressSeconds,
      suppressMilliseconds: suppressMilliseconds,
      includeOffset: includeOffset
    });
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  ;

  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  ;

  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  ;

  _proto.toSQLDate = function toSQLDate() {
    return toTechFormat(this, "yyyy-MM-dd");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.local().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.local().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.local().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQLTime = function toSQLTime(_temp4) {
    var _ref8 = _temp4 === void 0 ? {} : _temp4,
        _ref8$includeOffset = _ref8.includeOffset,
        includeOffset = _ref8$includeOffset === void 0 ? true : _ref8$includeOffset,
        _ref8$includeZone = _ref8.includeZone,
        includeZone = _ref8$includeZone === void 0 ? false : _ref8$includeZone;

    return toTechTimeFormat(this, {
      includeOffset: includeOffset,
      includeZone: includeZone,
      spaceZone: true
    });
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + " " + this.toSQLTime(opts);
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID$2;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toSeconds = function toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a Javascript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.local().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns a Javascript Date equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  } // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  ;

  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
    }

    var durOpts = Object.assign({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, opts);

    var units = maybeArray(unit).map(Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = _diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.diff(DateTime.local(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  ;

  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.local().hasSame(otherDT, 'day'); //~> true if both the same calendar day
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    if (unit === "millisecond") {
      return this.valueOf() === otherDateTime.valueOf();
    } else {
      var inputMs = otherDateTime.valueOf();
      return this.startOf(unit) <= inputMs && inputMs <= this.endOf(unit);
    }
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {boolean} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.local().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.local().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.local().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.local().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.local().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.local().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  ;

  _proto.toRelative = function toRelative(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    var base = options.base || DateTime.fromObject({
      zone: this.zone
    }),
        padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    return diffRelative(base, this.plus(padding), Object.assign(options, {
      numeric: "always",
      units: ["years", "months", "days", "hours", "minutes", "seconds"]
    }));
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.local().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.local().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  ;

  _proto.toRelativeCalendar = function toRelativeCalendar(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    return diffRelative(options.base || DateTime.fromObject({
      zone: this.zone
    }), this, Object.assign(options, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  ;

  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  ;

  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  } // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  ;

  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$locale = _options.locale,
        locale = _options$locale === void 0 ? null : _options$locale,
        _options$numberingSys = _options.numberingSystem,
        numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  ;

  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    return DateTime.fromFormatExplain(text, fmt, options);
  } // FORMAT PRESETS

  /**
   * {@link toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  ;

  _createClass(DateTime, [{
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */

  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.local().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */

  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);

  return DateTime;
}();
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
  }
}

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.LocalZone = LocalZone;
exports.Settings = Settings;
exports.Zone = Zone;
//# sourceMappingURL=luxon.js.map


/***/ }),

/***/ "./node_modules/ngx-csv/ngx-csv.js":
/*!*****************************************!*\
  !*** ./node_modules/ngx-csv/ngx-csv.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CsvConfigConsts = (function () {
    function CsvConfigConsts() {
    }
    CsvConfigConsts.EOL = "\r\n";
    CsvConfigConsts.BOM = "\ufeff";
    CsvConfigConsts.DEFAULT_FIELD_SEPARATOR = ',';
    CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR = '.';
    CsvConfigConsts.DEFAULT_QUOTE = '"';
    CsvConfigConsts.DEFAULT_SHOW_TITLE = false;
    CsvConfigConsts.DEFAULT_TITLE = 'My Report';
    CsvConfigConsts.DEFAULT_FILENAME = 'mycsv.csv';
    CsvConfigConsts.DEFAULT_SHOW_LABELS = false;
    CsvConfigConsts.DEFAULT_USE_BOM = true;
    CsvConfigConsts.DEFAULT_HEADER = [];
    CsvConfigConsts.DEFAULT_NO_DOWNLOAD = false;
    return CsvConfigConsts;
}());
exports.CsvConfigConsts = CsvConfigConsts;
exports.ConfigDefaults = {
    filename: CsvConfigConsts.DEFAULT_FILENAME,
    fieldSeparator: CsvConfigConsts.DEFAULT_FIELD_SEPARATOR,
    quoteStrings: CsvConfigConsts.DEFAULT_QUOTE,
    decimalseparator: CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR,
    showLabels: CsvConfigConsts.DEFAULT_SHOW_LABELS,
    showTitle: CsvConfigConsts.DEFAULT_SHOW_TITLE,
    title: CsvConfigConsts.DEFAULT_TITLE,
    useBom: CsvConfigConsts.DEFAULT_USE_BOM,
    headers: CsvConfigConsts.DEFAULT_HEADER,
    noDownload: CsvConfigConsts.DEFAULT_NO_DOWNLOAD
};
var ngxCsv = (function () {
    function ngxCsv(DataJSON, filename, options) {
        this.csv = "";
        var config = options || {};
        this.data = typeof DataJSON != 'object' ? JSON.parse(DataJSON) : DataJSON;
        this._options = objectAssign({}, exports.ConfigDefaults, config);
        if (this._options.filename) {
            this._options.filename = filename;
        }
        this.generateCsv();
    }
    /**
     * Generate and Download Csv
     */
    ngxCsv.prototype.generateCsv = function () {
        if (this._options.useBom) {
            this.csv += CsvConfigConsts.BOM;
        }
        if (this._options.showTitle) {
            this.csv += this._options.title + '\r\n\n';
        }
        this.getHeaders();
        this.getBody();
        if (this.csv == '') {
            console.log("Invalid data");
            return;
        }
        if (this._options.noDownload) {
            return this.csv;
        }
        var blob = new Blob([this.csv], { "type": "text/csv;charset=utf8;" });
        if (navigator.msSaveBlob) {
            var filename = this._options.filename.replace(/ /g, "_") + ".csv";
            navigator.msSaveBlob(blob, filename);
        }
        else {
            var uri = 'data:attachment/csv;charset=utf-8,' + encodeURI(this.csv);
            var link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.setAttribute('visibility', 'hidden');
            link.download = this._options.filename.replace(/ /g, "_") + ".csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    /**
     * Create Headers
     */
    ngxCsv.prototype.getHeaders = function () {
        var _this = this;
        if (this._options.headers.length > 0) {
            var headers = this._options.headers;
            var row = headers.reduce(function (headerRow, header) {
                return headerRow + header + _this._options.fieldSeparator;
            }, '');
            row = row.slice(0, -1);
            this.csv += row + CsvConfigConsts.EOL;
        }
    };
    /**
     * Create Body
     */
    ngxCsv.prototype.getBody = function () {
        for (var i = 0; i < this.data.length; i++) {
            var row = "";
            for (var index in this.data[i]) {
                row += this.formartData(this.data[i][index]) + this._options.fieldSeparator;
            }
            row = row.slice(0, -1);
            this.csv += row + CsvConfigConsts.EOL;
        }
    };
    /**
     * Format Data
     * @param {any} data
     */
    ngxCsv.prototype.formartData = function (data) {
        if (this._options.decimalseparator === 'locale' && ngxCsv.isFloat(data)) {
            return data.toLocaleString();
        }
        if (this._options.decimalseparator !== '.' && ngxCsv.isFloat(data)) {
            return data.toString().replace('.', this._options.decimalseparator);
        }
        if (typeof data === 'string') {
            data = data.replace(/"/g, '""');
            if (this._options.quoteStrings || data.indexOf(',') > -1 || data.indexOf('\n') > -1 || data.indexOf('\r') > -1) {
                data = this._options.quoteStrings + data + this._options.quoteStrings;
            }
            return data;
        }
        if (typeof data === 'boolean') {
            return data ? 'TRUE' : 'FALSE';
        }
        return data;
    };
    /**
     * Check if is Float
     * @param {any} input
     */
    ngxCsv.isFloat = function (input) {
        return +input === input && (!isFinite(input) || Boolean(input % 1));
    };
    return ngxCsv;
}());
exports.ngxCsv = ngxCsv;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
/**
 * Convet to Object
 * @param {any} val
 */
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
/**
 * Assign data  to new Object
 * @param {any}   target
 * @param {any[]} ...source
 */
function objectAssign(target) {
    var source = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        source[_i - 1] = arguments[_i];
    }
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (Object.getOwnPropertySymbols) {
            symbols = Object.getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
}
//# sourceMappingURL=ngx-csv.js.map

/***/ }),

/***/ "./node_modules/ngx-material-timepicker/fesm5/ngx-material-timepicker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-material-timepicker/fesm5/ngx-material-timepicker.js ***!
  \*******************************************************************************/
/*! exports provided: AnimationState, NgxMaterialTimepickerComponent, NgxMaterialTimepickerModule, NgxMaterialTimepickerThemeDirective, NgxMaterialTimepickerToggleIconDirective, NgxTimepickerFieldComponent, TimepickerDirective, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationState", function() { return AnimationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaterialTimepickerComponent", function() { return NgxMaterialTimepickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaterialTimepickerModule", function() { return NgxMaterialTimepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaterialTimepickerThemeDirective", function() { return NgxMaterialTimepickerThemeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaterialTimepickerToggleIconDirective", function() { return NgxMaterialTimepickerToggleIconDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTimepickerFieldComponent", function() { return NgxTimepickerFieldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerDirective", function() { return TimepickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxMaterialTimepickerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgxMaterialTimepickerEventService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgxMaterialTimepickerToggleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgxMaterialTimepicker24HoursFaceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgxMaterialTimepickerHoursFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgxMaterialTimepicker12HoursFaceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NgxMaterialTimepickerMinutesFaceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgxMaterialTimepickerFaceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NgxMaterialTimepickerButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NgxMaterialTimepickerDialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return NgxMaterialTimepickerDialControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return NgxMaterialTimepickerPeriodComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return StyleSanitizerPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return TimeFormatterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return OverlayDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return AutofocusDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return MinutesFormatterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return NgxTimepickerTimeControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return NgxTimepickerPeriodSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");










var TimePeriod;
(function (TimePeriod) {
    TimePeriod["AM"] = "AM";
    TimePeriod["PM"] = "PM";
})(TimePeriod || (TimePeriod = {}));

var TimeFormat;
(function (TimeFormat) {
    TimeFormat["TWELVE"] = "hh:mm a";
    TimeFormat["TWELVE_SHORT"] = "h:m a";
    TimeFormat["TWENTY_FOUR"] = "HH:mm";
    TimeFormat["TWENTY_FOUR_SHORT"] = "H:m";
})(TimeFormat || (TimeFormat = {}));

function isSameOrAfter(time, compareWith, unit) {
    if (unit === void 0) { unit = 'minutes'; }
    if (unit === 'hours') {
        return time.hour >= compareWith.hour;
    }
    if (unit === 'minutes') {
        return time.hasSame(compareWith, unit) || time.valueOf() > compareWith.valueOf();
    }
}
function isSameOrBefore(time, compareWith, unit) {
    if (unit === void 0) { unit = 'minutes'; }
    if (unit === 'hours') {
        return time.hour <= compareWith.hour;
    }
    if (unit === 'minutes') {
        return time.hasSame(compareWith, unit) || time.valueOf() <= compareWith.valueOf();
    }
}
function isBetween(time, before, after, unit) {
    if (unit === void 0) { unit = 'minutes'; }
    if (unit === 'hours') {
        return isSameOrBefore(time, after, unit) && isSameOrAfter(time, before, unit);
    }
    if (unit === 'minutes') {
        return isSameOrBefore(time, after) && isSameOrAfter(time, before);
    }
}
function isDigit(e) {
    // Allow: backspace, delete, tab, escape, enter
    if ([46, 8, 9, 27, 13].some(function (n) { return n === e.keyCode; }) ||
        // Allow: Ctrl/cmd+A
        (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl/cmd+C
        (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl/cmd+X
        (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right, up, down
        (e.keyCode >= 35 && e.keyCode <= 40)) {
        return true;
    }
    return !((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105));
}

// @dynamic
var TimeAdapter = /** @class */ (function () {
    function TimeAdapter() {
    }
    TimeAdapter.parseTime = function (time, format) {
        if (format === void 0) { format = 12; }
        if (time.indexOf(':') === -1) {
            return 'Invalid time';
        }
        var period = time.trim().substr(time.length - 2).toUpperCase();
        var isPeriodValid = period === TimePeriod.AM || period === TimePeriod.PM;
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(time.split(':'), 2), h = _a[0], m = _a[1];
        if (format === 24) {
            var formattedHours = isPeriodValid ? this.formatHour(+h, 12, period) : +h;
            return formattedHours + ":" + parseInt(m, 10);
        }
        var isPM = +h > 12;
        var hours = isPM ? +h - 12 : +h;
        period = isPeriodValid ? period : isPM ? TimePeriod.PM : TimePeriod.AM;
        return hours + ":" + parseInt(m, 10) + " " + period;
    };
    TimeAdapter.formatTime = function (time, format) {
        if (format === void 0) { format = 12; }
        var timeFormat = (format === 24) ? TimeFormat.TWENTY_FOUR : TimeFormat.TWELVE;
        var timeMask = (format === 24) ? TimeFormat.TWENTY_FOUR_SHORT : TimeFormat.TWELVE_SHORT;
        return luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromFormat(this.parseTime(time, format), timeMask).toFormat(timeFormat).toLowerCase();
    };
    TimeAdapter.convertTimeToDateTime = function (time, format) {
        if (format === void 0) { format = 12; }
        var timeMask = (format === 24) ? TimeFormat.TWENTY_FOUR_SHORT : TimeFormat.TWELVE_SHORT;
        return luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromFormat(this.parseTime(time, format), timeMask);
    };
    TimeAdapter.isTimeAvailable = function (time, min, max, granularity, minutesGap, format) {
        if (!time) {
            return;
        }
        var convertedTime = this.convertTimeToDateTime(time, format);
        var minutes = convertedTime.minute;
        if (minutesGap && (minutes % minutesGap !== 0)) {
            throw new Error("Your minutes - " + minutes + " doesn't match your minutesGap - " + minutesGap);
        }
        var isAfter = (min && !max)
            && isSameOrAfter(convertedTime, min, granularity);
        var isBefore = (max && !min)
            && isSameOrBefore(convertedTime, max, granularity);
        var between = (min && max)
            && isBetween(convertedTime, min, max, granularity);
        var isAvailable = !min && !max;
        return isAfter || isBefore || between || isAvailable;
    };
    /***
     *  Format hour according to time format (12 or 24)
     */
    TimeAdapter.formatHour = function (currentHour, format, period) {
        if (format === 24) {
            return currentHour;
        }
        var hour = period === TimePeriod.AM ? currentHour : currentHour + 12;
        if (period === TimePeriod.AM && hour === 12) {
            return 0;
        }
        else if (period === TimePeriod.PM && hour === 24) {
            return 12;
        }
        return hour;
    };
    return TimeAdapter;
}());

var DEFAULT_HOUR = {
    time: 12,
    angle: 360
};
var DEFAULT_MINUTE = {
    time: 0,
    angle: 360
};
var NgxMaterialTimepickerService = /** @class */ (function () {
    function NgxMaterialTimepickerService() {
        this.hourSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](DEFAULT_HOUR);
        this.minuteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](DEFAULT_MINUTE);
        this.periodSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](TimePeriod.AM);
    }
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "hour", {
        set: function (hour) {
            this.hourSubject.next(hour);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "selectedHour", {
        get: function () {
            return this.hourSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "minute", {
        set: function (minute) {
            this.minuteSubject.next(minute);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "selectedMinute", {
        get: function () {
            return this.minuteSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "period", {
        set: function (period) {
            var isPeriodValid = (period === TimePeriod.AM) || (period === TimePeriod.PM);
            if (isPeriodValid) {
                this.periodSubject.next(period);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "selectedPeriod", {
        get: function () {
            return this.periodSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NgxMaterialTimepickerService.prototype.setDefaultTimeIfAvailable = function (time, min, max, format, minutesGap) {
        /* Workaround to double error message*/
        try {
            if (TimeAdapter.isTimeAvailable(time, min, max, 'minutes', minutesGap)) {
                this.setDefaultTime(TimeAdapter.formatTime(time, format), format);
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    NgxMaterialTimepickerService.prototype.getFullTime = function (format) {
        var hour = this.hourSubject.getValue().time;
        var minute = this.minuteSubject.getValue().time;
        var period = format === 12 ? this.periodSubject.getValue() : '';
        return TimeAdapter.formatTime(hour + ":" + minute + " " + period, format);
    };
    NgxMaterialTimepickerService.prototype.setDefaultTime = function (time, format) {
        var defaultTime = TimeAdapter.convertTimeToDateTime(time, format).toJSDate();
        if (luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromJSDate(defaultTime).isValid) {
            var period = time.substr(time.length - 2).toUpperCase();
            var hour = defaultTime.getHours();
            this.hour = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_HOUR, { time: formatHourByPeriod(hour, period) });
            this.minute = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_MINUTE, { time: defaultTime.getMinutes() });
            this.period = period;
        }
        else {
            this.resetTime();
        }
    };
    NgxMaterialTimepickerService.prototype.resetTime = function () {
        this.hour = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_HOUR);
        this.minute = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_MINUTE);
        this.period = TimePeriod.AM;
    };
    NgxMaterialTimepickerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgxMaterialTimepickerService_Factory() { return new NgxMaterialTimepickerService(); }, token: NgxMaterialTimepickerService, providedIn: "root" });
    NgxMaterialTimepickerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NgxMaterialTimepickerService);
    return NgxMaterialTimepickerService;
}());
/***
 *  Format hour in 24hours format to meridian (AM or PM) format
 */
function formatHourByPeriod(hour, period) {
    switch (period) {
        case TimePeriod.AM:
            return hour === 0 ? 12 : hour;
        case TimePeriod.PM:
            return hour === 12 ? 12 : hour - 12;
        default:
            return hour;
    }
}

var TimeUnit;
(function (TimeUnit) {
    TimeUnit[TimeUnit["HOUR"] = 0] = "HOUR";
    TimeUnit[TimeUnit["MINUTE"] = 1] = "MINUTE";
})(TimeUnit || (TimeUnit = {}));

var NgxMaterialTimepickerEventService = /** @class */ (function () {
    function NgxMaterialTimepickerEventService() {
        this.backdropClickSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keydownEventSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    Object.defineProperty(NgxMaterialTimepickerEventService.prototype, "backdropClick", {
        get: function () {
            return this.backdropClickSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerEventService.prototype, "keydownEvent", {
        get: function () {
            return this.keydownEventSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NgxMaterialTimepickerEventService.prototype.dispatchEvent = function (event) {
        switch (event.type) {
            case 'click':
                this.backdropClickSubject.next(event);
                break;
            case 'keydown':
                this.keydownEventSubject.next(event);
                break;
            default:
                throw new Error('no such event type');
        }
    };
    NgxMaterialTimepickerEventService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgxMaterialTimepickerEventService_Factory() { return new NgxMaterialTimepickerEventService(); }, token: NgxMaterialTimepickerEventService, providedIn: "root" });
    NgxMaterialTimepickerEventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NgxMaterialTimepickerEventService);
    return NgxMaterialTimepickerEventService;
}());

var AnimationState;
(function (AnimationState) {
    AnimationState["ENTER"] = "enter";
    AnimationState["LEAVE"] = "leave";
})(AnimationState || (AnimationState = {}));
var ESCAPE = 27;
var NgxMaterialTimepickerComponent = /** @class */ (function () {
    function NgxMaterialTimepickerComponent(timepickerService, eventService) {
        var _this = this;
        this.timepickerService = timepickerService;
        this.eventService = eventService;
        this.timeUnit = TimeUnit;
        this.activeTimeUnit = TimeUnit.HOUR;
        this.isOpened = false;
        this.isEsc = true;
        this.timeSet = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hourSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = [];
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.eventService.backdropClick, this.eventService.keydownEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (e) { return e.keyCode === ESCAPE && _this.isEsc; })))
            .subscribe(function () { return _this.close(); }));
    }
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "format", {
        get: function () {
            return this.timepickerInput ? this.timepickerInput.format : this._format;
        },
        set: function (value) {
            this._format = value === 24 ? 24 : 12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "minutesGap", {
        get: function () {
            return this._minutesGap;
        },
        set: function (gap) {
            if (gap == null) {
                return;
            }
            gap = Math.floor(gap);
            this._minutesGap = gap <= 59 ? gap : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "defaultTime", {
        set: function (time) {
            this.setDefaultTime(time);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "minTime", {
        get: function () {
            return this.timepickerInput && this.timepickerInput.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "maxTime", {
        get: function () {
            return this.timepickerInput && this.timepickerInput.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "disabled", {
        get: function () {
            return this.timepickerInput && this.timepickerInput.disabled;
        },
        enumerable: true,
        configurable: true
    });
    NgxMaterialTimepickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.timepickerService.selectedHour
            .subscribe(function (hour) { return _this.selectedHour = hour; }));
        this.subscriptions.push(this.timepickerService.selectedMinute
            .subscribe(function (minute) { return _this.selectedMinute = minute; }));
        this.subscriptions.push(this.timepickerService.selectedPeriod
            .subscribe(function (period) { return _this.selectedPeriod = period; }));
    };
    /***
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     */
    NgxMaterialTimepickerComponent.prototype.registerInput = function (input) {
        if (this.timepickerInput) {
            throw Error('A Timepicker can only be associated with a single input.');
        }
        this.timepickerInput = input;
    };
    NgxMaterialTimepickerComponent.prototype.onHourChange = function (hour) {
        this.timepickerService.hour = hour;
    };
    NgxMaterialTimepickerComponent.prototype.onHourSelected = function (hour) {
        this.changeTimeUnit(TimeUnit.MINUTE);
        this.hourSelected.next(hour);
    };
    NgxMaterialTimepickerComponent.prototype.onMinuteChange = function (minute) {
        this.timepickerService.minute = minute;
    };
    NgxMaterialTimepickerComponent.prototype.changePeriod = function (period) {
        this.timepickerService.period = period;
    };
    NgxMaterialTimepickerComponent.prototype.changeTimeUnit = function (unit) {
        this.activeTimeUnit = unit;
    };
    NgxMaterialTimepickerComponent.prototype.setTime = function () {
        this.timeSet.next(this.timepickerService.getFullTime(this.format));
        this.close();
    };
    NgxMaterialTimepickerComponent.prototype.setDefaultTime = function (time) {
        this.timepickerService.setDefaultTimeIfAvailable(time, this.minTime, this.maxTime, this.format, this.minutesGap);
    };
    NgxMaterialTimepickerComponent.prototype.open = function () {
        this.isOpened = true;
        if (!this.disableAnimation) {
            this.animationState = AnimationState.ENTER;
        }
        this.opened.next();
    };
    NgxMaterialTimepickerComponent.prototype.close = function () {
        if (this.disableAnimation) {
            this.closeTimepicker();
            return;
        }
        this.animationState = AnimationState.LEAVE;
    };
    NgxMaterialTimepickerComponent.prototype.animationDone = function (event) {
        if (event.phaseName === 'done' && event.toState === AnimationState.LEAVE) {
            this.closeTimepicker();
        }
    };
    NgxMaterialTimepickerComponent.prototype.onKeydown = function (e) {
        this.eventService.dispatchEvent(e);
        e.stopPropagation();
    };
    NgxMaterialTimepickerComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    NgxMaterialTimepickerComponent.prototype.closeTimepicker = function () {
        this.isOpened = false;
        this.activeTimeUnit = TimeUnit.HOUR;
        this.closed.next();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxMaterialTimepickerComponent.prototype, "cancelBtnTmpl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxMaterialTimepickerComponent.prototype, "editableHintTmpl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxMaterialTimepickerComponent.prototype, "confirmBtnTmpl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ESC'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerComponent.prototype, "isEsc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxMaterialTimepickerComponent.prototype, "enableKeyboardInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxMaterialTimepickerComponent.prototype, "preventOverlayClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxMaterialTimepickerComponent.prototype, "disableAnimation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])
    ], NgxMaterialTimepickerComponent.prototype, "format", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])
    ], NgxMaterialTimepickerComponent.prototype, "minutesGap", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
    ], NgxMaterialTimepickerComponent.prototype, "defaultTime", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerComponent.prototype, "timeSet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerComponent.prototype, "opened", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerComponent.prototype, "closed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerComponent.prototype, "hourSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], NgxMaterialTimepickerComponent.prototype, "onKeydown", null);
    NgxMaterialTimepickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker',
            template: "<div class=\"timepicker-backdrop-overlay\" *ngIf=\"isOpened\" [overlay]=\"preventOverlayClick\"></div>\n<div class=\"timepicker-overlay\" *ngIf=\"isOpened\">\n    <div class=\"timepicker\" [@timepicker]=\"animationState\" (@timepicker.done)=\"animationDone($event)\">\n        <header class=\"timepicker__header\">\n            <ngx-material-timepicker-dial [format]=\"format\" [hour]=\"selectedHour?.time\"\n                                          [minute]=\"selectedMinute?.time\"\n                                          [period]=\"selectedPeriod\" [activeTimeUnit]=\"activeTimeUnit\"\n                                          [minTime]=\"minTime\" [maxTime]=\"maxTime\"\n                                          [isEditable]=\"enableKeyboardInput\"\n                                          [editableHintTmpl]=\"editableHintTmpl\"\n                                          [minutesGap]=\"minutesGap\"\n                                          (periodChanged)=\"changePeriod($event)\"\n                                          (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                          (hourChanged)=\"onHourChange($event)\"\n                                          (minuteChanged)=\"onMinuteChange($event)\"\n            ></ngx-material-timepicker-dial>\n        </header>\n        <div class=\"timepicker__main-content\">\n            <div class=\"timepicker__body\" [ngSwitch]=\"activeTimeUnit\">\n                <div *ngSwitchCase=\"timeUnit.HOUR\">\n                    <ngx-material-timepicker-24-hours-face *ngIf=\"format === 24;else ampmHours\"\n                                                           (hourChange)=\"onHourChange($event)\"\n                                                           [selectedHour]=\"selectedHour\"\n                                                           [minTime]=\"minTime\"\n                                                           [maxTime]=\"maxTime\"\n                                                           [format]=\"format\"\n                                                           (hourSelected)=\"onHourSelected($event)\"></ngx-material-timepicker-24-hours-face>\n                    <ng-template #ampmHours>\n                        <ngx-material-timepicker-12-hours-face\n                            (hourChange)=\"onHourChange($event)\"\n                            [selectedHour]=\"selectedHour\"\n                            [period]=\"selectedPeriod\"\n                            [minTime]=\"minTime\"\n                            [maxTime]=\"maxTime\"\n                            (hourSelected)=\"onHourSelected($event)\"></ngx-material-timepicker-12-hours-face>\n                    </ng-template>\n                </div>\n                <ngx-material-timepicker-minutes-face *ngSwitchCase=\"timeUnit.MINUTE\"\n                                                      [selectedMinute]=\"selectedMinute\"\n                                                      [selectedHour]=\"selectedHour?.time\"\n                                                      [minTime]=\"minTime\"\n                                                      [maxTime]=\"maxTime\"\n                                                      [format]=\"format\"\n                                                      [period]=\"selectedPeriod\"\n                                                      [minutesGap]=\"minutesGap\"\n                                                      (minuteChange)=\"onMinuteChange($event)\"></ngx-material-timepicker-minutes-face>\n            </div>\n            <div class=\"timepicker__actions\">\n                <div (click)=\"close()\">\n                    <!--suppress HtmlUnknownAttribute -->\n                    <ng-container *ngTemplateOutlet=\"cancelBtnTmpl ? cancelBtnTmpl : cancelBtnDefault\"></ng-container>\n                </div>\n                <div (click)=\"setTime()\">\n                    <!--suppress HtmlUnknownAttribute -->\n                    <ng-container\n                        *ngTemplateOutlet=\"confirmBtnTmpl ? confirmBtnTmpl : confirmBtnDefault\"></ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #cancelBtnDefault>\n    <ngx-material-timepicker-button>Cancel</ngx-material-timepicker-button>\n</ng-template>\n<ng-template #confirmBtnDefault>\n    <ngx-material-timepicker-button>Ok</ngx-material-timepicker-button>\n</ng-template>\n",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('timepicker', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])("* => " + AnimationState.ENTER, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-30%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(AnimationState.ENTER + " => " + AnimationState.LEAVE, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-30%)', opacity: 0 }))
                    ])
                ])
            ],
            providers: [NgxMaterialTimepickerService],
            styles: [":host{--body-background-color:#fff;--primary-font-family:'Roboto',sans-serif;--button-color:deepskyblue;--dial-active-color:#fff;--dial-inactive-color:rgba(255, 255, 255, .5);--dial-background-color:deepskyblue;--clock-face-time-active-color:#fff;--clock-face-time-inactive-color:#6c6c6c;--clock-face-inner-time-inactive-color:#929292;--clock-face-time-disabled-color:#c5c5c5;--clock-face-background-color:#f0f0f0;--clock-hand-color:deepskyblue}.timepicker-backdrop-overlay{position:fixed;top:0;bottom:0;right:0;left:0;background-color:rgba(0,0,0,.3);z-index:999;pointer-events:auto}.timepicker-overlay{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:999;pointer-events:none}.timepicker{width:300px;border-radius:2px;box-shadow:rgba(0,0,0,.25) 0 14px 45px,rgba(0,0,0,.22) 0 10px 18px;outline:0;position:static;z-index:999;pointer-events:auto}.timepicker__header{padding:15px 30px;background-color:#00bfff}@supports (background-color:var(--dial-background-color)){.timepicker__header{background-color:var(--dial-background-color)}}.timepicker__body{padding:15px 5px;display:flex;justify-content:center;align-items:center;background-color:#fff}@supports (background-color:var(--body-background-color)){.timepicker__body{background-color:var(--body-background-color)}}.timepicker__actions{display:flex;justify-content:flex-end;padding:15px;background-color:#fff}@supports (background-color:var(--body-background-color)){.timepicker__actions{background-color:var(--body-background-color)}}@media (max-device-width:1023px) and (orientation:landscape){.timepicker{display:flex;width:515px}.timepicker__header{display:flex;align-items:center}.timepicker__main-content{display:flex;flex-direction:column;width:100%}.timepicker__actions{padding:5px;margin-top:-1px}}"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgxMaterialTimepickerService,
            NgxMaterialTimepickerEventService])
    ], NgxMaterialTimepickerComponent);
    return NgxMaterialTimepickerComponent;
}());

/* To override a default toggle icon */
var NgxMaterialTimepickerToggleIconDirective = /** @class */ (function () {
    function NgxMaterialTimepickerToggleIconDirective() {
    }
    NgxMaterialTimepickerToggleIconDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[ngxMaterialTimepickerToggleIcon]' })
    ], NgxMaterialTimepickerToggleIconDirective);
    return NgxMaterialTimepickerToggleIconDirective;
}());

var NgxMaterialTimepickerToggleComponent = /** @class */ (function () {
    function NgxMaterialTimepickerToggleComponent() {
    }
    Object.defineProperty(NgxMaterialTimepickerToggleComponent.prototype, "disabled", {
        get: function () {
            return this._disabled === undefined ? this.timepicker.disabled : this._disabled;
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    NgxMaterialTimepickerToggleComponent.prototype.open = function (event) {
        if (this.timepicker) {
            this.timepicker.open();
            event.stopPropagation();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('for'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", NgxMaterialTimepickerComponent)
    ], NgxMaterialTimepickerToggleComponent.prototype, "timepicker", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
    ], NgxMaterialTimepickerToggleComponent.prototype, "disabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(NgxMaterialTimepickerToggleIconDirective, { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", NgxMaterialTimepickerToggleIconDirective)
    ], NgxMaterialTimepickerToggleComponent.prototype, "customIcon", void 0);
    NgxMaterialTimepickerToggleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-toggle',
            template: "<button class=\"ngx-material-timepicker-toggle\" (click)=\"open($event)\" [disabled]=\"disabled\" type=\"button\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\" *ngIf=\"!customIcon\">\n        <path\n            d=\"M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z\"/>\n    </svg>\n\n    <ng-content select=\"[ngxMaterialTimepickerToggleIcon]\"></ng-content>\n</button>\n",
            styles: [".ngx-material-timepicker-toggle{display:flex;justify-content:center;align-items:center;padding:4px;background-color:transparent;border-radius:50%;text-align:center;border:none;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .3s;cursor:pointer}.ngx-material-timepicker-toggle:focus{background-color:rgba(0,0,0,.07)}"]
        })
    ], NgxMaterialTimepickerToggleComponent);
    return NgxMaterialTimepickerToggleComponent;
}());

var VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TimepickerDirective; }),
    multi: true
};
var TimepickerDirective = /** @class */ (function () {
    function TimepickerDirective(elementRef) {
        this.elementRef = elementRef;
        this._format = 12;
        this._value = '';
        this.timepickerSubscriptions = [];
        this.onTouched = function () {
        };
        this.onChange = function () {
        };
    }
    Object.defineProperty(TimepickerDirective.prototype, "format", {
        get: function () {
            return this._format;
        },
        set: function (value) {
            this._format = value === 24 ? 24 : 12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerDirective.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (value) {
            if (typeof value === 'string') {
                this._min = TimeAdapter.convertTimeToDateTime(value, this._format);
                return;
            }
            this._min = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerDirective.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (value) {
            if (typeof value === 'string') {
                this._max = TimeAdapter.convertTimeToDateTime(value, this._format);
                return;
            }
            this._max = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerDirective.prototype, "timepicker", {
        set: function (picker) {
            this.registerTimepicker(picker);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerDirective.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (!value) {
                this._value = '';
                this.updateInputValue();
                return;
            }
            var time = TimeAdapter.formatTime(value, this._format);
            var isAvailable = TimeAdapter.isTimeAvailable(time, this._min, this._max, 'minutes', this._timepicker.minutesGap, this._format);
            if (isAvailable) {
                this._value = time;
                this.updateInputValue();
                return;
            }
            console.warn('Selected time doesn\'t match min or max value');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerDirective.prototype, "defaultTime", {
        set: function (time) {
            this._timepicker.setDefaultTime(time);
        },
        enumerable: true,
        configurable: true
    });
    TimepickerDirective.prototype.onInput = function (value) {
        this.value = value;
        this.onChange(value);
    };
    TimepickerDirective.prototype.ngOnChanges = function (changes) {
        if (changes['value'] && changes['value'].currentValue) {
            this.defaultTime = changes['value'].currentValue;
        }
    };
    TimepickerDirective.prototype.onClick = function (event) {
        if (!this.disableClick) {
            this._timepicker.open();
            event.stopPropagation();
        }
    };
    TimepickerDirective.prototype.writeValue = function (value) {
        this.value = value;
        this.defaultTime = value;
    };
    TimepickerDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TimepickerDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TimepickerDirective.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    TimepickerDirective.prototype.ngOnDestroy = function () {
        this.timepickerSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    TimepickerDirective.prototype.registerTimepicker = function (picker) {
        var _this = this;
        if (picker) {
            this._timepicker = picker;
            this._timepicker.registerInput(this);
            this.timepickerSubscriptions.push(this._timepicker.timeSet.subscribe(function (time) {
                _this.value = time;
                _this.onChange(_this._value);
                _this.onTouched();
            }));
            this.timepickerSubscriptions.push(this._timepicker.closed.subscribe(function () { return _this.defaultTime = _this._value; }));
        }
        else {
            throw new Error('NgxMaterialTimepickerComponent is not defined.' +
                ' Please make sure you passed the timepicker to ngxTimepicker directive');
        }
    };
    TimepickerDirective.prototype.updateInputValue = function () {
        this.elementRef.nativeElement.value = this.value;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])
    ], TimepickerDirective.prototype, "format", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], TimepickerDirective.prototype, "min", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], TimepickerDirective.prototype, "max", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngxTimepicker'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", NgxMaterialTimepickerComponent),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgxMaterialTimepickerComponent])
    ], TimepickerDirective.prototype, "timepicker", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
    ], TimepickerDirective.prototype, "value", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], TimepickerDirective.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], TimepickerDirective.prototype, "disableClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], TimepickerDirective.prototype, "onClick", null);
    TimepickerDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ngxTimepicker]',
            providers: [VALUE_ACCESSOR],
            host: {
                '[disabled]': 'disabled',
                '(input)': 'onInput($event.target.value)',
                '(blur)': 'onTouched()',
            },
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TimepickerDirective);
    return TimepickerDirective;
}());

var NgxMaterialTimepickerThemeDirective = /** @class */ (function () {
    function NgxMaterialTimepickerThemeDirective(elementRef) {
        this.element = elementRef.nativeElement;
    }
    NgxMaterialTimepickerThemeDirective.prototype.ngAfterViewInit = function () {
        if (this.theme) {
            this.setTheme(this.theme);
        }
    };
    NgxMaterialTimepickerThemeDirective.prototype.setTheme = function (theme) {
        for (var val in theme) {
            if (theme.hasOwnProperty(val)) {
                if (typeof theme[val] === 'string') {
                    for (var prop in theme) {
                        if (theme.hasOwnProperty(prop)) {
                            this.element.style.setProperty("--" + camelCaseToDash(prop), theme[prop]);
                        }
                    }
                    return;
                }
                this.setTheme(theme[val]);
            }
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngxMaterialTimepickerTheme'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerThemeDirective.prototype, "theme", void 0);
    NgxMaterialTimepickerThemeDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[ngxMaterialTimepickerTheme]' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NgxMaterialTimepickerThemeDirective);
    return NgxMaterialTimepickerThemeDirective;
}());
function camelCaseToDash(myStr) {
    return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function getHours(format) {
    return Array(format).fill(1).map(function (v, i) {
        var angleStep = 30;
        var time = v + i;
        var angle = angleStep * time;
        return { time: time === 24 ? 0 : time, angle: angle };
    });
}
function disableHours(hours, config) {
    if (config.min || config.max) {
        return hours.map(function (value) {
            var hour = config.format === 24 ? value.time : TimeAdapter.formatHour(value.time, config.format, config.period);
            var currentTime = luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromObject({ hour: hour }).toFormat(TimeFormat.TWELVE);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value, { disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'hours') });
        });
    }
    return hours;
}
function getMinutes(gap) {
    if (gap === void 0) { gap = 1; }
    var minutesCount = 60;
    var angleStep = 360 / minutesCount;
    var minutes = [];
    for (var i = 0; i < minutesCount; i++) {
        var angle = angleStep * i;
        if (i % gap === 0) {
            minutes.push({ time: i, angle: angle !== 0 ? angle : 360 });
        }
    }
    return minutes;
}
function disableMinutes(minutes, selectedHour, config) {
    if (config.min || config.max) {
        var hour_1 = TimeAdapter.formatHour(selectedHour, config.format, config.period);
        return minutes.map(function (value) {
            var currentTime = luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromObject({ hour: hour_1, minute: value.time }).toFormat(TimeFormat.TWELVE);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value, { disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'minutes') });
        });
    }
    return minutes;
}

var NgxMaterialTimepickerHoursFace = /** @class */ (function () {
    function NgxMaterialTimepickerHoursFace(format) {
        this.hourChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hourSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hoursList = [];
        this.hoursList = getHours(format);
    }
    NgxMaterialTimepickerHoursFace.prototype.onTimeSelected = function (time) {
        this.hourSelected.next(time);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerHoursFace.prototype, "selectedHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"])
    ], NgxMaterialTimepickerHoursFace.prototype, "minTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"])
    ], NgxMaterialTimepickerHoursFace.prototype, "maxTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxMaterialTimepickerHoursFace.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerHoursFace.prototype, "hourChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerHoursFace.prototype, "hourSelected", void 0);
    return NgxMaterialTimepickerHoursFace;
}());

var NgxMaterialTimepicker24HoursFaceComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgxMaterialTimepicker24HoursFaceComponent, _super);
    function NgxMaterialTimepicker24HoursFaceComponent() {
        return _super.call(this, 24) || this;
    }
    NgxMaterialTimepicker24HoursFaceComponent.prototype.ngAfterContentInit = function () {
        this.hoursList = disableHours(this.hoursList, {
            min: this.minTime,
            max: this.maxTime,
            format: this.format
        });
    };
    NgxMaterialTimepicker24HoursFaceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-24-hours-face',
            template: "<ngx-material-timepicker-face [selectedTime]=\"selectedHour\" [faceTime]=\"hoursList\" [format]=\"format\"\n                              (timeChange)=\"hourChange.next($event)\"\n                              (timeSelected)=\"onTimeSelected($event)\"></ngx-material-timepicker-face>\n"
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NgxMaterialTimepicker24HoursFaceComponent);
    return NgxMaterialTimepicker24HoursFaceComponent;
}(NgxMaterialTimepickerHoursFace));

var NgxMaterialTimepicker12HoursFaceComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgxMaterialTimepicker12HoursFaceComponent, _super);
    function NgxMaterialTimepicker12HoursFaceComponent() {
        return _super.call(this, 12) || this;
    }
    NgxMaterialTimepicker12HoursFaceComponent.prototype.ngOnChanges = function (changes) {
        if (changes['period'] && changes['period'].currentValue) {
            this.hoursList = disableHours(this.hoursList, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgxMaterialTimepicker12HoursFaceComponent.prototype, "period", void 0);
    NgxMaterialTimepicker12HoursFaceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-12-hours-face',
            template: "<ngx-material-timepicker-face [selectedTime]=\"selectedHour\" [faceTime]=\"hoursList\"\n                              (timeChange)=\"hourChange.next($event)\" (timeSelected)=\"onTimeSelected($event)\"></ngx-material-timepicker-face>\n"
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NgxMaterialTimepicker12HoursFaceComponent);
    return NgxMaterialTimepicker12HoursFaceComponent;
}(NgxMaterialTimepickerHoursFace));

var NgxMaterialTimepickerMinutesFaceComponent = /** @class */ (function () {
    function NgxMaterialTimepickerMinutesFaceComponent() {
        this.minutesList = [];
        this.timeUnit = TimeUnit;
        this.minuteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxMaterialTimepickerMinutesFaceComponent.prototype.ngOnChanges = function (changes) {
        if (changes['period'] && changes['period'].currentValue) {
            var minutes = getMinutes(this.minutesGap);
            this.minutesList = disableMinutes(minutes, this.selectedHour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "selectedMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "selectedHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "period", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"])
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"])
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "maxTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minutesGap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minuteChange", void 0);
    NgxMaterialTimepickerMinutesFaceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-minutes-face',
            template: "<ngx-material-timepicker-face [faceTime]=\"minutesList\" [selectedTime]=\"selectedMinute\"\n                              [minutesGap]=\"minutesGap\"\n                              (timeChange)=\"minuteChange.next($event)\" [unit]=\"timeUnit.MINUTE\"></ngx-material-timepicker-face>\n"
        })
    ], NgxMaterialTimepickerMinutesFaceComponent);
    return NgxMaterialTimepickerMinutesFaceComponent;
}());

var CLOCK_HAND_STYLES = {
    small: {
        height: '75px',
        top: 'calc(50% - 75px)'
    },
    large: {
        height: '103px',
        top: 'calc(50% - 103px)'
    }
};
var NgxMaterialTimepickerFaceComponent = /** @class */ (function () {
    function NgxMaterialTimepickerFaceComponent() {
        this.timeUnit = TimeUnit;
        this.innerClockFaceSize = 85;
        this.timeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxMaterialTimepickerFaceComponent.prototype.ngAfterViewInit = function () {
        this.setClockHandPosition();
        this.addTouchEvents();
    };
    NgxMaterialTimepickerFaceComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var faceTimeChanges = changes['faceTime'];
        var selectedTimeChanges = changes['selectedTime'];
        if ((faceTimeChanges && faceTimeChanges.currentValue)
            && (selectedTimeChanges && selectedTimeChanges.currentValue)) {
            /* Set time according to passed an input value */
            this.selectedTime = this.faceTime.find(function (time) { return time.time === _this.selectedTime.time; });
        }
        if (selectedTimeChanges && selectedTimeChanges.currentValue) {
            this.setClockHandPosition();
        }
        if (faceTimeChanges && faceTimeChanges.currentValue) {
            // To avoid an error ExpressionChangedAfterItHasBeenCheckedError
            setTimeout(function () { return _this.selectAvailableTime(); });
        }
    };
    NgxMaterialTimepickerFaceComponent.prototype.trackByTime = function (_, time) {
        return time.time;
    };
    NgxMaterialTimepickerFaceComponent.prototype.onMousedown = function (e) {
        e.preventDefault();
        this.isStarted = true;
    };
    NgxMaterialTimepickerFaceComponent.prototype.selectTime = function (e) {
        if (!this.isStarted && (e instanceof MouseEvent && e.type !== 'click')) {
            return;
        }
        var clockFaceCords = this.clockFace.nativeElement.getBoundingClientRect();
        /* Get x0 and y0 of the circle */
        var centerX = clockFaceCords.left + clockFaceCords.width / 2;
        var centerY = clockFaceCords.top + clockFaceCords.height / 2;
        /* Counting the arctangent and convert it to from radian to deg */
        var arctangent = Math.atan(Math.abs(e.clientX - centerX) / Math.abs(e.clientY - centerY)) * 180 / Math.PI;
        /* Get angle according to quadrant */
        var circleAngle = countAngleByCords(centerX, centerY, e.clientX, e.clientY, arctangent);
        /* Check if selected time from the inner clock face (24 hours format only) */
        var isInnerClockChosen = this.format && this.isInnerClockFace(centerX, centerY, e.clientX, e.clientY);
        /* Round angle according to angle step */
        var angleStep = this.unit === TimeUnit.MINUTE ? (6 * (this.minutesGap || 1)) : 30;
        var roundedAngle = isInnerClockChosen
            ? roundAngle(circleAngle, angleStep) + 360
            : roundAngle(circleAngle, angleStep);
        var angle = roundedAngle === 0 ? 360 : roundedAngle;
        var selectedTime = this.faceTime.find(function (val) { return val.angle === angle; });
        if (selectedTime && !selectedTime.disabled) {
            this.timeChange.next(selectedTime);
            /* To let know whether user ended interaction with clock face */
            if (!this.isStarted) {
                this.timeSelected.next(selectedTime.time);
            }
        }
    };
    NgxMaterialTimepickerFaceComponent.prototype.onMouseup = function (e) {
        e.preventDefault();
        this.isStarted = false;
    };
    NgxMaterialTimepickerFaceComponent.prototype.isHourSelected = function (hour) {
        return (hour === this.selectedTime.time) && !this.isClockFaceDisabled;
    };
    NgxMaterialTimepickerFaceComponent.prototype.isMinuteSelected = function (minute) {
        return ((this.selectedTime.time === minute) && (minute % (this.minutesGap || 5) === 0)) && !this.isClockFaceDisabled;
    };
    NgxMaterialTimepickerFaceComponent.prototype.ngOnDestroy = function () {
        this.removeTouchEvents();
    };
    NgxMaterialTimepickerFaceComponent.prototype.addTouchEvents = function () {
        this.touchStartHandler = this.onMousedown.bind(this);
        this.touchEndHandler = this.onMouseup.bind(this);
        this.clockFace.nativeElement.addEventListener('touchstart', this.touchStartHandler);
        this.clockFace.nativeElement.addEventListener('touchend', this.touchEndHandler);
    };
    NgxMaterialTimepickerFaceComponent.prototype.removeTouchEvents = function () {
        this.clockFace.nativeElement.removeEventListener('touchstart', this.touchStartHandler);
        this.clockFace.nativeElement.removeEventListener('touchend', this.touchEndHandler);
    };
    NgxMaterialTimepickerFaceComponent.prototype.setClockHandPosition = function () {
        if (this.format === 24) {
            if (this.selectedTime.time > 12 || this.selectedTime.time === 0) {
                this.decreaseClockHand();
            }
            else {
                this.increaseClockHand();
            }
        }
        this.clockHand.nativeElement.style.transform = "rotate(" + this.selectedTime.angle + "deg)";
    };
    NgxMaterialTimepickerFaceComponent.prototype.selectAvailableTime = function () {
        var _this = this;
        var currentTime = this.faceTime.find(function (time) { return _this.selectedTime.time === time.time; });
        this.isClockFaceDisabled = this.faceTime.every(function (time) { return time.disabled; });
        if ((currentTime && currentTime.disabled) && !this.isClockFaceDisabled) {
            var availableTime = this.faceTime.find(function (time) { return !time.disabled; });
            this.timeChange.next(availableTime);
        }
    };
    NgxMaterialTimepickerFaceComponent.prototype.isInnerClockFace = function (x0, y0, x, y) {
        /* Detect whether time from the inner clock face or not (24 format only) */
        return Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)) < this.innerClockFaceSize;
    };
    NgxMaterialTimepickerFaceComponent.prototype.decreaseClockHand = function () {
        this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.small.height;
        this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.small.top;
    };
    NgxMaterialTimepickerFaceComponent.prototype.increaseClockHand = function () {
        this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.large.height;
        this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.large.top;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], NgxMaterialTimepickerFaceComponent.prototype, "faceTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerFaceComponent.prototype, "selectedTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxMaterialTimepickerFaceComponent.prototype, "unit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxMaterialTimepickerFaceComponent.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxMaterialTimepickerFaceComponent.prototype, "minutesGap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerFaceComponent.prototype, "timeChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerFaceComponent.prototype, "timeSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('clockFace', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NgxMaterialTimepickerFaceComponent.prototype, "clockFace", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('clockHand', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NgxMaterialTimepickerFaceComponent.prototype, "clockHand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event']),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], NgxMaterialTimepickerFaceComponent.prototype, "onMousedown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchmove', ['$event.changedTouches[0]']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchend', ['$event.changedTouches[0]']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousemove', ['$event']),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], NgxMaterialTimepickerFaceComponent.prototype, "selectTime", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseup', ['$event']),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], NgxMaterialTimepickerFaceComponent.prototype, "onMouseup", null);
    NgxMaterialTimepickerFaceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-face',
            template: "<div class=\"clock-face\" #clockFace>\n    <div *ngIf=\"unit !== timeUnit.MINUTE;else minutesFace\" class=\"clock-face__container\">\n        <div class=\"clock-face__number clock-face__number--outer\"\n             [style.transform]=\"'rotateZ('+ time.angle +'deg) translateX(-50%)' | styleSanitizer\"\n             *ngFor=\"let time of faceTime.slice(0, 12); trackBy: trackByTime\">\n\t\t\t<span [style.transform]=\"'rotateZ(-'+ time.angle +'deg)' | styleSanitizer\"\n                  [ngClass]=\"{'active': isHourSelected(time.time), 'disabled': time.disabled}\">{{time.time}}</span>\n        </div>\n        <div class=\"clock-face__inner\" *ngIf=\"faceTime.length > 12\"\n             [style.top]=\"'calc(50% - ' + innerClockFaceSize + 'px)'\">\n            <div class=\"clock-face__number clock-face__number--inner\"\n                 [style.transform]=\"'rotateZ('+ time.angle +'deg) translateX(-50%)' | styleSanitizer\"\n                 [style.height.px]=\"innerClockFaceSize\"\n                 *ngFor=\"let time of faceTime.slice(12, 24); trackBy: trackByTime\">\n\t\t\t<span [style.transform]=\"'rotateZ(-'+ time.angle +'deg)' | styleSanitizer\"\n                  [ngClass]=\"{'active': isHourSelected(time.time), 'disabled': time.disabled}\">\n                {{time.time === 0 ? '00' : time.time}}</span>\n            </div>\n        </div>\n    </div>\n\n    <span class=\"clock-face__clock-hand\" [ngClass]=\"{'clock-face__clock-hand_minute': unit === timeUnit.MINUTE}\"\n          #clockHand [hidden]=\"isClockFaceDisabled\"></span>\n</div>\n<ng-template #minutesFace>\n    <div class=\"clock-face__container\">\n        <div class=\"clock-face__number clock-face__number--outer\"\n             [style.transform]=\"'rotateZ('+ time.angle +'deg) translateX(-50%)' | styleSanitizer\"\n             *ngFor=\"let time of faceTime; trackBy: trackByTime\">\n\t<span [style.transform]=\"'rotateZ(-'+ time.angle +'deg)' | styleSanitizer\"\n          [ngClass]=\"{'active': isMinuteSelected(time.time), 'disabled': time.disabled}\">\n\t{{time.time === 0 ? '00' : time.time | minutesFormatter: minutesGap}}</span>\n        </div>\n    </div>\n</ng-template>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".clock-face{width:290px;height:290px;border-radius:50%;position:relative;display:flex;justify-content:center;padding:20px;box-sizing:border-box;background-color:#f0f0f0}@supports (background-color:var(--clock-face-background-color)){.clock-face{background-color:var(--clock-face-background-color)}}.clock-face__inner{position:absolute}.clock-face__container{margin-left:-2px}.clock-face__number{position:absolute;-webkit-transform-origin:0 100%;transform-origin:0 100%;width:50px;text-align:center;z-index:2}.clock-face__number--outer{height:calc(290px / 2 - 20px)}.clock-face__number--outer>span{font-size:16px;color:#6c6c6c}@supports (color:var(--clock-face-time-inactive-color)){.clock-face__number--outer>span{color:var(--clock-face-time-inactive-color)}}.clock-face__number--inner>span{font-size:14px;color:#929292}@supports (color:var(--clock-face-inner-time-inactive-color)){.clock-face__number--inner>span{color:var(--clock-face-inner-time-inactive-color)}}.clock-face__number>span{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:30px;height:30px;display:flex;justify-content:center;align-items:center;margin:auto;border-radius:50%;font-weight:500;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.clock-face__number>span{font-family:var(--primary-font-family)}}.clock-face__number>span.active{background-color:#00bfff;color:#fff}@supports (background-color:var(--clock-hand-color)){.clock-face__number>span.active{background-color:var(--clock-hand-color);color:var(--clock-face-time-active-color)}}.clock-face__number>span.disabled{color:#c5c5c5}@supports (color:var(--clock-face-time-disabled-color)){.clock-face__number>span.disabled{color:var(--clock-face-time-disabled-color)}}.clock-face__clock-hand{height:103px;width:2px;-webkit-transform-origin:0 100%;transform-origin:0 100%;position:absolute;top:calc(50% - 103px);z-index:1;background-color:#00bfff}@supports (background-color:var(--clock-hand-color)){.clock-face__clock-hand{background-color:var(--clock-hand-color)}}.clock-face__clock-hand:after{content:'';width:7px;height:7px;border-radius:50%;background-color:inherit;position:absolute;bottom:-3px;left:-3.5px}.clock-face__clock-hand_minute:before{content:'';width:7px;height:7px;background-color:#fff;border-radius:50%;position:absolute;top:-8px;left:calc(50% - 8px);box-sizing:content-box;border:4px solid #00bfff}@supports (border-color:var(--clock-hand-color)){.clock-face__clock-hand_minute:before{border-color:var(--clock-hand-color)}}@media (max-device-width:1023px) and (orientation:landscape){.clock-face{width:225px;height:225px;padding:5px}.clock-face__number--outer{height:calc(225px / 2 - 5px)}.clock-face__clock-hand_minute:before{top:0}}"]
        })
    ], NgxMaterialTimepickerFaceComponent);
    return NgxMaterialTimepickerFaceComponent;
}());
function roundAngle(angle, step) {
    return Math.round(angle / step) * step;
}
function countAngleByCords(x0, y0, x, y, currentAngle) {
    if (y > y0 && x >= x0) { // II quarter
        return 180 - currentAngle;
    }
    else if (y > y0 && x < x0) { // III quarter
        return 180 + currentAngle;
    }
    else if (y < y0 && x < x0) { // IV quarter
        return 360 - currentAngle;
    }
    else { // I quarter
        return currentAngle;
    }
}

var NgxMaterialTimepickerButtonComponent = /** @class */ (function () {
    function NgxMaterialTimepickerButtonComponent() {
    }
    NgxMaterialTimepickerButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-button',
            template: "<button class=\"timepicker-button\" type=\"button\">\n  <span><ng-content></ng-content></span>\n</button>\n",
            styles: [".timepicker-button{display:inline-block;height:36px;min-width:88px;line-height:36px;border:12px;border-radius:2px;background-color:transparent;text-align:center;transition:450ms cubic-bezier(.23,1,.32,1);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;cursor:pointer;outline:0;color:#00bfff}@supports (color:var(--button-color)){.timepicker-button{color:var(--button-color)}}.timepicker-button:focus,.timepicker-button:hover{background-color:rgba(153,153,153,.2)}.timepicker-button>span{font-size:14px;text-transform:uppercase;font-weight:600;padding-left:16px;padding-right:16px;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-button>span{font-family:var(--primary-font-family)}}"]
        })
    ], NgxMaterialTimepickerButtonComponent);
    return NgxMaterialTimepickerButtonComponent;
}());

var NgxMaterialTimepickerDialComponent = /** @class */ (function () {
    function NgxMaterialTimepickerDialComponent() {
        this.timeUnit = TimeUnit;
        this.periodChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timeUnitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hourChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.minuteChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxMaterialTimepickerDialComponent.prototype.ngOnChanges = function (changes) {
        if (changes['period'] && changes['period'].currentValue
            || changes['format'] && changes['format'].currentValue) {
            var hours = getHours(this.format);
            this.hours = disableHours(hours, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
        if (changes['period'] && changes['period'].currentValue
            || changes['hour'] && changes['hour'].currentValue) {
            var minutes = getMinutes(this.minutesGap);
            this.minutes = disableMinutes(minutes, +this.hour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    };
    NgxMaterialTimepickerDialComponent.prototype.changeTimeUnit = function (unit) {
        this.timeUnitChanged.next(unit);
    };
    NgxMaterialTimepickerDialComponent.prototype.changePeriod = function (period) {
        this.periodChanged.next(period);
    };
    NgxMaterialTimepickerDialComponent.prototype.changeHour = function (hour) {
        this.hourChanged.next(hour);
    };
    NgxMaterialTimepickerDialComponent.prototype.changeMinute = function (minute) {
        this.minuteChanged.next(minute);
    };
    NgxMaterialTimepickerDialComponent.prototype.showHint = function () {
        this.isHintVisible = true;
    };
    NgxMaterialTimepickerDialComponent.prototype.hideHint = function () {
        this.isHintVisible = false;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxMaterialTimepickerDialComponent.prototype, "editableHintTmpl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerDialComponent.prototype, "hour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerDialComponent.prototype, "minute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxMaterialTimepickerDialComponent.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgxMaterialTimepickerDialComponent.prototype, "period", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxMaterialTimepickerDialComponent.prototype, "activeTimeUnit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"])
    ], NgxMaterialTimepickerDialComponent.prototype, "minTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"])
    ], NgxMaterialTimepickerDialComponent.prototype, "maxTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxMaterialTimepickerDialComponent.prototype, "isEditable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxMaterialTimepickerDialComponent.prototype, "minutesGap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerDialComponent.prototype, "periodChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerDialComponent.prototype, "timeUnitChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerDialComponent.prototype, "hourChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerDialComponent.prototype, "minuteChanged", void 0);
    NgxMaterialTimepickerDialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-dial',
            template: "<div class=\"timepicker-dial\">\n    <div class=\"timepicker-dial__container\">\n        <div class=\"timepicker-dial__time\">\n            <ngx-material-timepicker-dial-control [timeList]=\"hours\" [time]=\"hour\" [timeUnit]=\"timeUnit.HOUR\"\n                                                  [isActive]=\"activeTimeUnit === timeUnit.HOUR\"\n                                                  [isEditable]=\"isEditable\"\n                                                  (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                                  (timeChanged)=\"changeHour($event)\"\n                                                  (focused)=\"showHint()\"\n                                                  (unfocused)=\"hideHint()\">\n\n            </ngx-material-timepicker-dial-control>\n            <span>:</span>\n            <ngx-material-timepicker-dial-control [timeList]=\"minutes\" [time]=\"minute\" [timeUnit]=\"timeUnit.MINUTE\"\n                                                  [isActive]=\"activeTimeUnit === timeUnit.MINUTE\"\n                                                  [isEditable]=\"isEditable\"\n                                                  [minutesGap]=\"minutesGap\"\n                                                  (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                                  (timeChanged)=\"changeMinute($event)\"\n                                                  (focused)=\"showHint()\"\n                                                  (unfocused)=\"hideHint()\">\n\n            </ngx-material-timepicker-dial-control>\n        </div>\n        <ngx-material-timepicker-period class=\"timepicker-dial__period\"\n                                        [ngClass]=\"{'timepicker-dial__period--hidden': format === 24}\"\n                                        [selectedPeriod]=\"period\" [activeTimeUnit]=\"activeTimeUnit\"\n                                        [maxTime]=\"maxTime\" [minTime]=\"minTime\" [format]=\"format\"\n                                        [hours]=\"hours\" [minutes]=\"minutes\" [selectedHour]=\"hour\"\n                                        (periodChanged)=\"changePeriod($event)\"></ngx-material-timepicker-period>\n    </div>\n    <div *ngIf=\"isEditable\" [ngClass]=\"{'timepicker-dial__hint-container--hidden': !isHintVisible}\">\n        <!--suppress HtmlUnknownAttribute -->\n        <ng-container *ngTemplateOutlet=\"editableHintTmpl ? editableHintTmpl : editableHintDefault\"></ng-container>\n        <ng-template #editableHintDefault>\n            <small class=\"timepicker-dial__hint\"> * use arrows (<span>&#8645;</span>) to change the time</small>\n        </ng-template>\n    </div>\n</div>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".timepicker-dial{text-align:right}.timepicker-dial__container{display:flex;align-items:center;justify-content:flex-end;-webkit-tap-highlight-color:transparent}.timepicker-dial__time{display:flex;align-items:baseline;line-height:normal;font-size:50px;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__time{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__period{display:block;margin-left:10px}.timepicker-dial__hint-container--hidden,.timepicker-dial__period--hidden{visibility:hidden}.timepicker-dial__hint{display:inline-block;font-size:10px;color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__hint{color:var(--dial-active-color)}}.timepicker-dial__hint span{font-size:14px}@media (max-device-width:1023px) and (orientation:landscape){.timepicker-dial__container{flex-direction:column}.timepicker-dial__period{margin-left:0}}"]
        })
    ], NgxMaterialTimepickerDialComponent);
    return NgxMaterialTimepickerDialComponent;
}());

var TimeFormatterPipe = /** @class */ (function () {
    function TimeFormatterPipe() {
    }
    TimeFormatterPipe.prototype.transform = function (time, timeUnit) {
        if (time == null || time === '') {
            return time;
        }
        switch (timeUnit) {
            case TimeUnit.HOUR:
                return luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromObject({ hour: +time }).toFormat('HH');
            case TimeUnit.MINUTE:
                return luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromObject({ minute: +time }).toFormat('mm');
            default:
                throw new Error('no such time unit');
        }
    };
    TimeFormatterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'timeFormatter'
        })
    ], TimeFormatterPipe);
    return TimeFormatterPipe;
}());

var NgxMaterialTimepickerDialControlComponent = /** @class */ (function () {
    function NgxMaterialTimepickerDialControlComponent() {
        this.timeUnitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focused = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unfocused = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(NgxMaterialTimepickerDialControlComponent.prototype, "selectedTime", {
        get: function () {
            var _this = this;
            if (!!this.time) {
                return this.timeList.find(function (t) { return t.time === +_this.time; });
            }
        },
        enumerable: true,
        configurable: true
    });
    NgxMaterialTimepickerDialControlComponent.prototype.ngOnChanges = function (changes) {
        if (changes['time'] && (changes['time'].currentValue !== undefined)) {
            if (this.isEditable && !changes['time'].firstChange) {
                return;
            }
            this.time = new TimeFormatterPipe().transform(+changes['time'].currentValue, this.timeUnit);
        }
    };
    NgxMaterialTimepickerDialControlComponent.prototype.saveTimeAndChangeTimeUnit = function (event, unit) {
        event.preventDefault();
        this.previousTime = this.time;
        this.timeUnitChanged.next(unit);
        this.focused.next();
    };
    NgxMaterialTimepickerDialControlComponent.prototype.updateTime = function () {
        var time = this.selectedTime;
        if (time) {
            this.timeChanged.next(time);
            this.previousTime = time.time;
        }
    };
    NgxMaterialTimepickerDialControlComponent.prototype.formatTime = function () {
        if (this.isEditable) {
            var time = this.time || this.previousTime;
            this.time = new TimeFormatterPipe().transform(+time, this.timeUnit);
            this.unfocused.next();
        }
    };
    NgxMaterialTimepickerDialControlComponent.prototype.onKeyDown = function (e) {
        var char = String.fromCharCode(e.keyCode);
        if ((!isDigit(e)) || isTimeDisabledToChange(this.time, char, this.timeList)) {
            e.preventDefault();
        }
        if (isDigit(e)) {
            this.changeTimeByArrow(e.keyCode);
        }
    };
    NgxMaterialTimepickerDialControlComponent.prototype.changeTimeByArrow = function (keyCode) {
        var ARROW_UP = 38;
        var ARROW_DOWN = 40;
        var time;
        if (keyCode === ARROW_UP) {
            time = String(+this.time + (this.minutesGap || 1));
        }
        else if (keyCode === ARROW_DOWN) {
            time = String(+this.time - (this.minutesGap || 1));
        }
        if (!isTimeUnavailable(time, this.timeList)) {
            this.time = time;
            this.updateTime();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "timeList", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "timeUnit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "time", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "isActive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "isEditable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "minutesGap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "timeUnitChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "timeChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "focused", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "unfocused", void 0);
    NgxMaterialTimepickerDialControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-dial-control',
            template: "<!--suppress HtmlFormInputWithoutLabel -->\n<input class=\"timepicker-dial__control timepicker-dial__item\"\n       [ngClass]=\"{'timepicker-dial__item_active': isActive, 'timepicker-dial__control_editable': isEditable}\"\n       [(ngModel)]=\"time\" (input)=\"updateTime()\" (focus)=\"saveTimeAndChangeTimeUnit($event, timeUnit)\"\n       (blur)=\"formatTime()\" [readonly]=\"!isEditable\" [timepickerAutofocus]=\"isActive\" (keydown)=\"onKeyDown($event)\">\n",
            styles: [".timepicker-dial__item{cursor:pointer;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__item{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__item_active{color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__item_active{color:var(--dial-active-color)}}.timepicker-dial__control{border:none;background-color:transparent;font-size:50px;width:60px;padding:0;border-radius:3px}.timepicker-dial__control_editable:focus{color:#00bfff;background-color:#fff;outline:#00bfff}"]
        })
    ], NgxMaterialTimepickerDialControlComponent);
    return NgxMaterialTimepickerDialControlComponent;
}());
function isTimeDisabledToChange(currentTime, nextTime, timeList) {
    var isNumber = /\d/.test(nextTime);
    if (isNumber) {
        var time = currentTime + nextTime;
        return isTimeUnavailable(time, timeList);
    }
}
function isTimeUnavailable(time, timeList) {
    var selectedTime = timeList.find(function (value) { return value.time === +time; });
    return !selectedTime || (selectedTime && selectedTime.disabled);
}

var NgxMaterialTimepickerPeriodComponent = /** @class */ (function () {
    function NgxMaterialTimepickerPeriodComponent() {
        this.timePeriod = TimePeriod;
        this.isPeriodAvailable = true;
        this.periodChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxMaterialTimepickerPeriodComponent.prototype.changePeriod = function (period) {
        this.isPeriodAvailable = this.isSwitchPeriodAvailable(period);
        if (this.isPeriodAvailable) {
            this.periodChanged.next(period);
        }
    };
    NgxMaterialTimepickerPeriodComponent.prototype.animationDone = function () {
        this.isPeriodAvailable = true;
    };
    NgxMaterialTimepickerPeriodComponent.prototype.isSwitchPeriodAvailable = function (period) {
        var time = this.getDisabledTimeByPeriod(period);
        return !time.every(function (t) { return t.disabled; });
    };
    NgxMaterialTimepickerPeriodComponent.prototype.getDisabledTimeByPeriod = function (period) {
        switch (this.activeTimeUnit) {
            case TimeUnit.HOUR:
                return disableHours(this.hours, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period: period
                });
            case TimeUnit.MINUTE:
                return disableMinutes(this.minutes, +this.selectedHour, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period: period
                });
            default:
                throw new Error('no such TimeUnit');
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "selectedPeriod", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "activeTimeUnit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "hours", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "minutes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"])
    ], NgxMaterialTimepickerPeriodComponent.prototype, "minTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"])
    ], NgxMaterialTimepickerPeriodComponent.prototype, "maxTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "selectedHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "periodChanged", void 0);
    NgxMaterialTimepickerPeriodComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-period',
            template: "<div class=\"timepicker-period\">\n\t\t\t<button class=\"timepicker-dial__item timepicker-period__btn\"\n                  [ngClass]=\"{'timepicker-dial__item_active': selectedPeriod === timePeriod.AM}\"\n                  (click)=\"changePeriod(timePeriod.AM)\"\n                  type=\"button\">AM</button>\n    <button class=\"timepicker-dial__item timepicker-period__btn\"\n          [ngClass]=\"{'timepicker-dial__item_active': selectedPeriod === timePeriod.PM}\"\n          (click)=\"changePeriod(timePeriod.PM)\"\n          type=\"button\">PM</button>\n    <div class=\"timepicker-period__warning\" [@scaleInOut] (@scaleInOut.done)=\"animationDone()\" *ngIf=\"!isPeriodAvailable\">\n        <p>Current time would be invalid in this period.</p>\n    </div>\n</div>\n",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('scaleInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'scale(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'scale(1)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["sequence"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }))
                        ])
                    ])
                ])
            ],
            styles: [".timepicker-dial__item{cursor:pointer;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__item{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__item_active{color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__item_active{color:var(--dial-active-color)}}.timepicker-period{display:flex;flex-direction:column;position:relative}.timepicker-period__btn{padding:1px 3px;border:0;background-color:transparent;font-size:18px;font-weight:500;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;border-radius:3px;transition:background-color .5s;font-family:Roboto,sans-serif}.timepicker-period__btn:focus{background-color:rgba(0,0,0,.07)}.timepicker-period__warning{padding:5px 10px;border-radius:3px;background-color:rgba(0,0,0,.55);color:#fff;position:absolute;width:200px;left:-20px;top:40px}.timepicker-period__warning>p{margin:0;font-size:12px;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-period__btn,.timepicker-period__warning>p{font-family:var(--primary-font-family)}}"]
        })
    ], NgxMaterialTimepickerPeriodComponent);
    return NgxMaterialTimepickerPeriodComponent;
}());

var StyleSanitizerPipe = /** @class */ (function () {
    function StyleSanitizerPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    StyleSanitizerPipe.prototype.transform = function (value) {
        if (!value) {
            return value;
        }
        return this.domSanitizer.bypassSecurityTrustStyle(value);
    };
    StyleSanitizerPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'styleSanitizer'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]])
    ], StyleSanitizerPipe);
    return StyleSanitizerPipe;
}());

var OverlayDirective = /** @class */ (function () {
    function OverlayDirective(eventService) {
        this.eventService = eventService;
    }
    OverlayDirective.prototype.onClick = function (e) {
        if (!this.preventClick) {
            this.eventService.dispatchEvent(e);
        }
        e.preventDefault();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('overlay'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], OverlayDirective.prototype, "preventClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MouseEvent]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], OverlayDirective.prototype, "onClick", null);
    OverlayDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[overlay]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgxMaterialTimepickerEventService])
    ], OverlayDirective);
    return OverlayDirective;
}());

var MinutesFormatterPipe = /** @class */ (function () {
    function MinutesFormatterPipe() {
    }
    MinutesFormatterPipe.prototype.transform = function (minute, gap) {
        if (gap === void 0) { gap = 5; }
        if (!minute) {
            return minute;
        }
        return minute % gap === 0 ? minute : '';
    };
    MinutesFormatterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'minutesFormatter'
        })
    ], MinutesFormatterPipe);
    return MinutesFormatterPipe;
}());

var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(element, document) {
        this.element = element;
        this.document = document;
        this.activeElement = this.document.activeElement;
    }
    AutofocusDirective.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.isFocusActive) {
            // To avoid ExpressionChangedAfterItHasBeenCheckedError;
            setTimeout(function () { return _this.element.nativeElement.focus({ preventScroll: true }); });
        }
    };
    AutofocusDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        // To avoid ExpressionChangedAfterItHasBeenCheckedError;
        setTimeout(function () { return _this.activeElement.focus({ preventScroll: true }); });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('timepickerAutofocus'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AutofocusDirective.prototype, "isFocusActive", void 0);
    AutofocusDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[timepickerAutofocus]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])
    ], AutofocusDirective);
    return AutofocusDirective;
}());

var NgxTimepickerFieldComponent = /** @class */ (function () {
    function NgxTimepickerFieldComponent(timepickerService) {
        this.timepickerService = timepickerService;
        this.minHour = 1;
        this.maxHour = 12;
        this.timeUnit = TimeUnit;
        this.buttonAlign = 'right';
        this._format = 12;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onChange = function () {
        };
    }
    NgxTimepickerFieldComponent_1 = NgxTimepickerFieldComponent;
    Object.defineProperty(NgxTimepickerFieldComponent.prototype, "format", {
        get: function () {
            return this._format;
        },
        set: function (value) {
            this._format = value === 24 ? 24 : 12;
            this.minHour = this._format === 12 ? 1 : 0;
            this.maxHour = this._format === 12 ? 12 : 23;
            this.hoursList = getHours(this._format);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxTimepickerFieldComponent.prototype, "defaultTime", {
        get: function () {
            return this._defaultTime;
        },
        set: function (val) {
            this.timepickerService.setDefaultTimeIfAvailable(val, null, null, this._format);
            this._defaultTime = val;
            this.timepickerTime = val;
            this.isDefaultTime = !!val;
        },
        enumerable: true,
        configurable: true
    });
    NgxTimepickerFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.period$ = this.timepickerService.selectedPeriod;
        this.timepickerService.selectedHour.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (hour) { return _this.hour = hour.time; });
        this.timepickerService.selectedMinute.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (minute) { return _this.minute = minute.time; });
        this.hoursList = getHours(this._format);
        this.minutesList = getMinutes();
    };
    NgxTimepickerFieldComponent.prototype.writeValue = function (val) {
        if (val) {
            this.defaultTime = val;
        }
    };
    NgxTimepickerFieldComponent.prototype.registerOnTouched = function (fn) {
    };
    NgxTimepickerFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NgxTimepickerFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    NgxTimepickerFieldComponent.prototype.changeHour = function (hour) {
        this.timepickerService.hour = this.hoursList.find(function (h) { return h.time === hour; });
        this.changeTime();
    };
    NgxTimepickerFieldComponent.prototype.changeMinute = function (minute) {
        this.timepickerService.minute = this.minutesList.find(function (m) { return m.time === minute; });
        this.changeTime();
    };
    NgxTimepickerFieldComponent.prototype.changePeriod = function (period) {
        this.timepickerService.period = period;
        this.changeTime();
    };
    NgxTimepickerFieldComponent.prototype.onTimeSet = function (time) {
        this.defaultTime = time;
        this.onChange(time);
        this.formatTime();
    };
    NgxTimepickerFieldComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
    };
    NgxTimepickerFieldComponent.prototype.changeTime = function () {
        var time = this.timepickerService.getFullTime(this._format);
        this.timepickerTime = time;
        this.onChange(time);
    };
    NgxTimepickerFieldComponent.prototype.formatTime = function () {
        this.hour = new TimeFormatterPipe().transform(this.hour, TimeUnit.HOUR);
        this.minute = new TimeFormatterPipe().transform(this.minute, TimeUnit.MINUTE);
    };
    var NgxTimepickerFieldComponent_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxTimepickerFieldComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxTimepickerFieldComponent.prototype, "toggleIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgxTimepickerFieldComponent.prototype, "buttonAlign", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxTimepickerFieldComponent.prototype, "clockTheme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxTimepickerFieldComponent.prototype, "controlOnly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])
    ], NgxTimepickerFieldComponent.prototype, "format", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
    ], NgxTimepickerFieldComponent.prototype, "defaultTime", null);
    NgxTimepickerFieldComponent = NgxTimepickerFieldComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-timepicker-field',
            template: "<div class=\"ngx-timepicker\" [ngClass]=\"{'ngx-timepicker--disabled': disabled}\">\n    <ngx-timepicker-time-control\n        class=\"ngx-timepicker__control--first\"\n        [placeholder]=\"'HH'\"\n        [time]=\"hour\"\n        [min]=\"minHour\"\n        [max]=\"maxHour\"\n        [timeUnit]=\"timeUnit.HOUR\"\n        [disabled]=\"disabled\"\n        [isDefaultTimeSet]=\"isDefaultTime\"\n        (timeChanged)=\"changeHour($event)\"></ngx-timepicker-time-control>\n    <span class=\"ngx-timepicker__time-colon ngx-timepicker__control--second\">:</span>\n    <ngx-timepicker-time-control\n        class=\"ngx-timepicker__control--third\"\n        [placeholder]=\"'MM'\"\n        [time]=\"minute\"\n        [min]=\"0\"\n        [max]=\"59\"\n        [timeUnit]=\"timeUnit.MINUTE\"\n        [disabled]=\"disabled\"\n        [isDefaultTimeSet]=\"isDefaultTime\"\n        (timeChanged)=\"changeMinute($event)\"></ngx-timepicker-time-control>\n    <ngx-timepicker-period-selector\n        class=\"ngx-timepicker__control--forth\"\n        [selectedPeriod]=\"period$|async\"\n        [disabled]=\"disabled\"\n        (periodSelected)=\"changePeriod($event)\"\n        *ngIf=\"format !== 24\"></ngx-timepicker-period-selector>\n    <ngx-material-timepicker-toggle\n        class=\"ngx-timepicker__toggle\"\n        *ngIf=\"!controlOnly\"\n        [ngClass]=\"{'ngx-timepicker__toggle--left': buttonAlign === 'left'}\"\n        [for]=\"timepicker\"\n        [disabled]=\"disabled\">\n        <span ngxMaterialTimepickerToggleIcon>\n            <!--suppress HtmlUnknownAttribute -->\n            <ng-container *ngTemplateOutlet=\"toggleIcon || defaultIcon\"></ng-container>\n        </span>\n    </ngx-material-timepicker-toggle>\n</div>\n<ngx-material-timepicker\n    [ngxMaterialTimepickerTheme]=\"clockTheme\"\n    [defaultTime]=\"timepickerTime\"\n    [format]=\"format\"\n    (timeSet)=\"onTimeSet($event)\" #timepicker></ngx-material-timepicker>\n\n<ng-template #defaultIcon>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\">\n        <!--suppress CheckEmptyScriptTag -->\n        <path\n            d=\"M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z\"/>\n    </svg>\n</ng-template>\n",
            providers: [
                NgxMaterialTimepickerService,
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgxTimepickerFieldComponent_1; }),
                    multi: true
                }
            ],
            styles: [".ngx-timepicker{display:flex;align-items:center;height:100%;border-bottom:1px solid rgba(0,0,0,.12)}.ngx-timepicker--disabled{background:rgba(0,0,0,.07);pointer-events:none}.ngx-timepicker__time-colon{margin-left:10px}.ngx-timepicker__control--first{order:1}.ngx-timepicker__control--second{order:2}.ngx-timepicker__control--third{order:3}.ngx-timepicker__control--forth,.ngx-timepicker__toggle{order:4}.ngx-timepicker__toggle--left{order:0}"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgxMaterialTimepickerService])
    ], NgxTimepickerFieldComponent);
    return NgxTimepickerFieldComponent;
}());

var NgxTimepickerTimeControlComponent = /** @class */ (function () {
    function NgxTimepickerTimeControlComponent() {
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxTimepickerTimeControlComponent.prototype.ngOnInit = function () {
        if (this.isDefaultTimeSet) {
            this.time = new TimeFormatterPipe().transform(this.time, this.timeUnit);
        }
    };
    NgxTimepickerTimeControlComponent.prototype.ngOnChanges = function (changes) {
        var timeChanges = changes['time'];
        var isTimeNotProvided = timeChanges && timeChanges.isFirstChange() && !this.isDefaultTimeSet;
        if (isTimeNotProvided) {
            this.time = null;
        }
    };
    NgxTimepickerTimeControlComponent.prototype.onKeydown = function (event) {
        if (!isDigit(event)) {
            event.preventDefault();
        }
        switch (event.key) {
            case 'ArrowUp':
                this.increase();
                break;
            case 'ArrowDown':
                this.decrease();
                break;
        }
    };
    NgxTimepickerTimeControlComponent.prototype.increase = function () {
        if (!this.disabled) {
            var nextTime = +this.time + 1;
            if (nextTime > this.max) {
                nextTime = this.min;
            }
            this.timeChanged.emit(nextTime);
        }
    };
    NgxTimepickerTimeControlComponent.prototype.decrease = function () {
        if (!this.disabled) {
            var previousTime = +this.time - 1;
            if (previousTime < this.min) {
                previousTime = this.max;
            }
            this.timeChanged.emit(previousTime);
        }
    };
    NgxTimepickerTimeControlComponent.prototype.onInput = function (input) {
        var value = parseInt(input.value, 10);
        if (!isNaN(value)) {
            this.time = value;
            if (this.time > this.max) {
                this.time = +String(value)[0];
            }
            if (this.time < this.min) {
                this.time = this.min;
            }
            input.value = String(this.time);
            this.timeChanged.emit(this.time);
        }
    };
    NgxTimepickerTimeControlComponent.prototype.onFocus = function () {
        this.isFocused = true;
    };
    NgxTimepickerTimeControlComponent.prototype.onBlur = function () {
        this.time = new TimeFormatterPipe().transform(this.time, this.timeUnit);
        this.isFocused = false;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxTimepickerTimeControlComponent.prototype, "time", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxTimepickerTimeControlComponent.prototype, "min", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxTimepickerTimeControlComponent.prototype, "max", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgxTimepickerTimeControlComponent.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxTimepickerTimeControlComponent.prototype, "timeUnit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxTimepickerTimeControlComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxTimepickerTimeControlComponent.prototype, "isDefaultTimeSet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxTimepickerTimeControlComponent.prototype, "timeChanged", void 0);
    NgxTimepickerTimeControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-timepicker-time-control',
            template: "<div class=\"ngx-timepicker-control\" [ngClass]=\"{'ngx-timepicker-control--active': isFocused}\">\n    <!--suppress HtmlFormInputWithoutLabel -->\n    <input class=\"ngx-timepicker-control__input\"\n           maxlength=\"2\"\n           [(ngModel)]=\"time\"\n           [placeholder]=\"placeholder\"\n           [disabled]=\"disabled\"\n           (keydown)=\"onKeydown($event)\"\n           (input)=\"onInput(inputElement)\"\n           (focus)=\"onFocus()\"\n           (blur)=\"onBlur()\" #inputElement>\n    <div class=\"ngx-timepicker-control__arrows\">\n            <span class=\"ngx-timepicker-control__arrow\" role=\"button\" (click)=\"increase()\">\n                &#9650;\n            </span>\n        <span class=\"ngx-timepicker-control__arrow\" role=\"button\" (click)=\"decrease()\">\n                &#9660;\n            </span>\n    </div>\n</div>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".ngx-timepicker-control{position:relative;display:flex;width:60px;height:30px;padding:0 5px;box-sizing:border-box}.ngx-timepicker-control--active:after{content:'';position:absolute;bottom:-2px;left:0;width:100%;height:1px;background-color:#00bfff}.ngx-timepicker-control__input{width:100%;height:100%;padding:0 5px 0 0;border:0;font-size:1rem;color:inherit;outline:0;text-align:center}.ngx-timepicker-control__input:disabled{background-color:transparent}.ngx-timepicker-control__arrows{position:absolute;right:2px;top:0;display:flex;flex-direction:column}.ngx-timepicker-control__arrow{font-size:11px;color:rgba(0,0,0,.4);cursor:pointer;transition:color .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-timepicker-control__arrow:hover{color:rgba(0,0,0,.9)}"]
        })
    ], NgxTimepickerTimeControlComponent);
    return NgxTimepickerTimeControlComponent;
}());

var NgxTimepickerPeriodSelectorComponent = /** @class */ (function () {
    function NgxTimepickerPeriodSelectorComponent() {
        this.periodSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.period = TimePeriod;
    }
    NgxTimepickerPeriodSelectorComponent.prototype.open = function () {
        if (!this.disabled) {
            this.isOpened = true;
        }
    };
    NgxTimepickerPeriodSelectorComponent.prototype.select = function (period) {
        this.periodSelected.next(period);
        this.isOpened = false;
    };
    NgxTimepickerPeriodSelectorComponent.prototype.backdropClick = function () {
        this.isOpened = false;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgxTimepickerPeriodSelectorComponent.prototype, "selectedPeriod", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxTimepickerPeriodSelectorComponent.prototype, "isOpened", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxTimepickerPeriodSelectorComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxTimepickerPeriodSelectorComponent.prototype, "periodSelected", void 0);
    NgxTimepickerPeriodSelectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-timepicker-period-selector',
            template: "<div class=\"period\">\n    <div class=\"period-control\">\n        <button class=\"period-control__button period__btn--default\"\n                [ngClass]=\"{'period-control__button--disabled': disabled}\"\n                type=\"button\"\n                (click)=\"open()\">\n            <span>{{selectedPeriod}}</span>\n            <span class=\"period-control__arrow\">&#9660;</span>\n        </button>\n    </div>\n    <ul class=\"period-selector\" @scaleInOut *ngIf=\"isOpened\" [timepickerAutofocus]=\"true\">\n        <li>\n            <button class=\"period-selector__button period__btn--default\"\n                    type=\"button\"\n                    (click)=\"select(period.AM)\"\n                    [ngClass]=\"{'period-selector__button--active': selectedPeriod === period.AM}\">{{period.AM}}</button>\n        </li>\n        <li>\n            <button class=\"period-selector__button period__btn--default\"\n                    type=\"button\"\n                    (click)=\"select(period.PM)\"\n                    [ngClass]=\"{'period-selector__button--active': selectedPeriod === period.PM}\">{{period.PM}}</button>\n        </li>\n    </ul>\n</div>\n<div class=\"overlay\" (click)=\"backdropClick()\" *ngIf=\"isOpened\"></div>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('scaleInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'scale(0)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'scale(1)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'scale(0)', opacity: 0 }))
                    ])
                ])
            ],
            styles: [".period{position:relative}.period__btn--default{padding:0;border:none;background-color:transparent;cursor:pointer;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;outline:0}.period-control{position:relative}.period-control__button{position:relative;width:60px;font-size:1rem;color:inherit;text-align:center}.period-control__button:not(.period-control__button--disabled):focus:after{content:'';position:absolute;bottom:-8px;left:0;width:100%;height:1px;background-color:#00bfff}.period-control__arrow{margin-left:10px;font-size:12px;color:rgba(0,0,0,.4)}.period-selector{position:absolute;top:calc(50% - 50px);right:calc(-50% + -50px);max-width:135px;width:150px;padding:6px 0;margin:0;list-style:none;background-color:#f5f5f5;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);z-index:201}.period-selector__button{width:100%;height:48px;padding:0 16px;line-height:48px}.period-selector__button--active{color:#00bfff}.period-selector__button:focus{background-color:#eee}.overlay{position:fixed;width:100%;height:100%;top:0;left:0;background-color:transparent;z-index:200}"]
        })
    ], NgxTimepickerPeriodSelectorComponent);
    return NgxTimepickerPeriodSelectorComponent;
}());

var NgxMaterialTimepickerModule = /** @class */ (function () {
    function NgxMaterialTimepickerModule() {
    }
    NgxMaterialTimepickerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            exports: [
                NgxMaterialTimepickerComponent,
                NgxMaterialTimepickerToggleComponent,
                NgxTimepickerFieldComponent,
                TimepickerDirective,
                NgxMaterialTimepickerToggleIconDirective,
                NgxMaterialTimepickerThemeDirective
            ],
            declarations: [
                NgxMaterialTimepickerComponent,
                NgxMaterialTimepicker24HoursFaceComponent,
                NgxMaterialTimepicker12HoursFaceComponent,
                NgxMaterialTimepickerMinutesFaceComponent,
                NgxMaterialTimepickerFaceComponent,
                NgxMaterialTimepickerToggleComponent,
                NgxMaterialTimepickerButtonComponent,
                NgxMaterialTimepickerDialComponent,
                NgxMaterialTimepickerDialControlComponent,
                NgxMaterialTimepickerPeriodComponent,
                StyleSanitizerPipe,
                TimeFormatterPipe,
                TimepickerDirective,
                OverlayDirective,
                NgxMaterialTimepickerToggleIconDirective,
                AutofocusDirective,
                MinutesFormatterPipe,
                NgxMaterialTimepickerThemeDirective,
                NgxTimepickerFieldComponent,
                NgxTimepickerTimeControlComponent,
                NgxTimepickerPeriodSelectorComponent
            ]
        })
    ], NgxMaterialTimepickerModule);
    return NgxMaterialTimepickerModule;
}());


//# sourceMappingURL=ngx-material-timepicker.js.map


/***/ }),

/***/ "./node_modules/ngx-print/fesm5/ngx-print.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-print/fesm5/ngx-print.js ***!
  \***************************************************/
/*! exports provided: NgxPrintDirective, NgxPrintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintDirective", function() { return NgxPrintDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintModule", function() { return NgxPrintModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPrintDirective = /** @class */ (function () {
    function NgxPrintDirective() {
        this._printStyle = [];
        /**
         *
         *
         * \@memberof NgxPrintDirective
         */
        this.useExistingCss = false;
        /**
         *
         *
         * @return html for the given tag
         *
         * \@memberof NgxPrintDirective
         */
        this._styleSheetFile = '';
    }
    Object.defineProperty(NgxPrintDirective.prototype, "printStyle", {
        /**
         *
         *
         * @memberof NgxPrintDirective
         */
        set: /**
         *
         *
         * \@memberof NgxPrintDirective
         * @param {?} values
         * @return {?}
         */
        function (values) {
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
                }
            }
            this.returnStyleValues();
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     *
     * @returns the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    NgxPrintDirective.prototype.returnStyleValues = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    function () {
        return "<style> " + this._printStyle.join(' ').replace(/,/g, ';') + " </style>";
    };
    Object.defineProperty(NgxPrintDirective.prototype, "styleSheetFile", {
        /**
         * @memberof NgxPrintDirective
         * @param cssList
         */
        set: /**
         * \@memberof NgxPrintDirective
         * @param {?} cssList
         * @return {?}
         */
        function (cssList) {
            var e_1, _a;
            /** @type {?} */
            var linkTagFn = (/**
             * @param {?} cssFileName
             * @return {?}
             */
            function (cssFileName) {
                return "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssFileName + "\">";
            });
            if (cssList.indexOf(',') !== -1) {
                /** @type {?} */
                var valueArr = cssList.split(',');
                try {
                    for (var valueArr_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(valueArr), valueArr_1_1 = valueArr_1.next(); !valueArr_1_1.done; valueArr_1_1 = valueArr_1.next()) {
                        var val = valueArr_1_1.value;
                        this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (valueArr_1_1 && !valueArr_1_1.done && (_a = valueArr_1.return)) _a.call(valueArr_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                this._styleSheetFile = linkTagFn(cssList);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @returns string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    NgxPrintDirective.prototype.returnStyleSheetLinkTags = /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    function () {
        return this._styleSheetFile;
    };
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    NgxPrintDirective.prototype.getElementTag = /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        /** @type {?} */
        var html = [];
        /** @type {?} */
        var elements = document.getElementsByTagName(tag);
        for (var index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    };
    /**
     *
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    NgxPrintDirective.prototype.print = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    function () {
        /** @type {?} */
        var printContents;
        /** @type {?} */
        var popupWin;
        /** @type {?} */
        var styles = '';
        /** @type {?} */
        var links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = document.getElementById(this.printSectionId).innerHTML;
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>" + (this.printTitle ? this.printTitle : "") + "</title>\n          " + this.returnStyleValues() + "\n          " + this.returnStyleSheetLinkTags() + "\n          " + styles + "\n          " + links + "\n        </head>\n        <body onload=\"window.print(); setTimeout(()=>{ window.close(); }, 0)\">\n          " + printContents + "\n        </body>\n      </html>");
        popupWin.document.close();
    };
    NgxPrintDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "button[ngxPrint]"
                },] }
    ];
    NgxPrintDirective.propDecorators = {
        printSectionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        printTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        useExistingCss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        printStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        styleSheetFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        print: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }]
    };
    return NgxPrintDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPrintModule = /** @class */ (function () {
    function NgxPrintModule() {
    }
    NgxPrintModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [NgxPrintDirective],
                    imports: [],
                    exports: [NgxPrintDirective]
                },] }
    ];
    return NgxPrintModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-print.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Controllers/customer/customer-list/customer-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Controllers/customer/customer-list/customer-list.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\" col-md-12 col-lg-12\">\n    <div class=\"card \">\n\n      <div class=\"card-header card-header-info card-header-icon\">\n        <div class=\"card-icon\">\n          <i class=\"material-icons\">list</i>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <h3 class=\"card-title \">Customer List\n            <button mat-button (click)=\"ExportCSV()\" class=\"btn btn-info  btn-sm btn-just-icon float-right\">\n              <i class=\"material-icons\">cloud_download</i>\n            </button> &nbsp;\n          </h3>\n        </div>\n        <div class=\"col-sm-12 col-lg-3 col-md-5 float-right searchfilter\">\n          <mat-form-field>\n\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" id=\"ProductSearchFilter\" placeholder=\"search\">\n\n          </mat-form-field>\n\n        </div>\n\n\n\n\n      </div>\n\n      <div class=\"card-body\">\n\n        <div class=\"table-responsive\">\n          <table mat-table [dataSource]=\"dataSource\" class=\"table table-hover \" matSort>\n\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"FirstName\">\n              <th mat-header-cell *matHeaderCellDef  style=\"padding-left: 0px;\" mat-sort-header width=\"15%\" > FirstName\n              </th>\n              <td mat-cell *matCellDef=\"let p\" style=\"padding-left: 0px;\"> {{p.FirstName}} </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"MiddleName\">\n              <th mat-header-cell *matHeaderCellDef  mat-sort-header width=\"10%\"> MiddleName </th>\n              <td mat-cell *matCellDef=\"let p\"> {{p.MiddleName}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"LastName\">\n              <th mat-header-cell *matHeaderCellDef width=\"15%\"> LastName </th>\n              <td mat-cell *matCellDef=\"let p\"> {{p.LastName}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Phone\">\n              <th mat-header-cell *matHeaderCellDef width=\"15%\"> Phone </th>\n              <td mat-cell *matCellDef=\"let p\"> {{p.Phone}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Street\" width=\"15%\">\n              <th mat-header-cell *matHeaderCellDef > Street </th>\n              <td mat-cell *matCellDef=\"let p\"> {{p.Street}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"City\">\n              <th mat-header-cell *matHeaderCellDef width=\"10%\"> City </th>\n              <td mat-cell *matCellDef=\"let p\"> {{p.City}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"State\">\n              <th mat-header-cell *matHeaderCellDef width=\"15%\" > State </th>\n              <td mat-cell *matCellDef=\"let p\"> {{p.State}} </td>\n            </ng-container>\n       \n\n            <ng-container matColumnDef=\"Actions\" >\n              <th mat-header-cell *matHeaderCellDef width=\"5%\" style=\"padding-right: 0px;\"  > Actions </th>\n              <td mat-cell *matCellDef=\"let p\" style=\"padding-right: 0px;\">\n                <span>\n                  <div class=\"btn-group btn-group-sm\">\n                    <button mat-button (click)=\"Edit(p)\" class=\"btn btn-success  btn-sm btn-just-icon\">\n                      <i class=\"material-icons\">directions_car</i>\n                    </button> &nbsp;\n                    <button mat-button (click)=\"DeleteCustomer(p.ID)\" class=\"btn btn-rose btn-sm  btn-just-icon\">\n                      <i class=\"material-icons\">delete</i>\n                    </button> &nbsp;\n                    <!-- <button mat-button (click)=\"DeleteProduct(p.ID)\" class=\"btn btn-success btn-sm  btn-just-icon\">\n                      <i class=\"material-icons\">directions_car</i>\n                    </button> -->\n                  </div>\n\n                </span>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n\n          <mat-paginator [pageSizeOptions]=\"[10,20,50]\" showFirstLastButtons></mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Controllers/customer/customer-setting/customer-setting.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Controllers/customer/customer-setting/customer-setting.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"row\">\n    \n              \n        <div class=\"col-lg-12\">\n            <div class=\"card \">\n                <div class=\"card-header card-header-info card-header-icon\">\n                    <div class=\"card-icon\">\n                        <i class=\"material-icons\">person_add</i>\n                    </div>\n                    <h3 class=\"card-title\">Customer Registration </h3>\n        \n        \n                </div>\n                <div class=\"card-body\">\n<br>\n        \n                    <form #CustomerForm=\"ngForm\" method=\"POST\" autocomplete=\"off\"  >\n        \n                   \n                            <label class=\"hidden\">{{aCustomer.ID}}</label>\n<div class=\"row\">\n                            <div class=\"col-lg-3\">\n                            <mat-form-field>\n                                <mat-label>First Name </mat-label>\n                                <input matInput required   [(ngModel)]=\"aCustomer.FirstName\" name=\"FirstName\">                            \n                            </mat-form-field>\n                          </div>\n        \n                          <div class=\"col-lg-3\">\n                            <mat-form-field>\n                                <mat-label>Middle Name</mat-label>\n                                <input matInput  [(ngModel)]=\"aCustomer.MiddleName\" name=\"MiddleName\">\n                            </mat-form-field>\n                          </div>\n        \n                            <div class=\"col-lg-3\">\n                            <mat-form-field>\n                                <mat-label>Last Name</mat-label>\n                                <input matInput required   [(ngModel)]=\"aCustomer.LastName\" name=\"LastName\">\n                            </mat-form-field>\n                          </div>\n        \n                            <div class=\"col-lg-3\">\n                            <mat-form-field>\n                                <mat-label>Phone</mat-label>\n                                <input matInput required   [(ngModel)]=\"aCustomer.Phone\" name=\"Phone\"  >\n                            </mat-form-field>\n                          </div>\n        \n        \n                            <div class=\"col-lg-3\">\n                            <mat-form-field>\n                                <mat-label>Street</mat-label>\n                                <input matInput required [(ngModel)]=\"aCustomer.Street\" name=\"Street\">\n                            </mat-form-field>\n                          </div>\n\n                          <div class=\"col-lg-3\">\n                              <mat-form-field>\n                                  <mat-label>City</mat-label>\n                                  <input matInput required [(ngModel)]=\"aCustomer.City\" name=\"City\">\n                              </mat-form-field>\n                            </div>\n\n                            <div class=\"col-lg-3\">\n                                <mat-form-field>\n                                    <mat-label>State</mat-label>\n                                    <input matInput required  [(ngModel)]=\"aCustomer.State\" name=\"State\">\n                                </mat-form-field>\n                              </div>\n\n                      \n        \n                              <div class=\"col-lg-3\">\n                                  <button mat-button class=\"  btn btn-info float-right\"\n                                  (click)=\"AddUpdateCustomer()\"  [disabled]=\" CustomerForm.invalid \"><span> <i\n                                          class=\"material-icons\">add_to_photos</i> &nbsp; Save Changes</span> </button> \n                                </div>\n  \n        \n                            <br> \n                           \n                            \n                      \n                          \n                            \n                     \n             \n                                  </div>\n        \n                </form>\n            </div>\n        </div>\n        </div>\n\n      </div>\n\n\n<div class=\"row\">\n\n        <div class=\"col-lg-8\">\n            <div class=\"card \">\n\n                <div class=\"card-header card-header-info card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\">local_car_wash</i>\n                  </div>\n          \n                  <div class=\"col-sm-12\">\n                    <h3 class=\"card-title \">Vehicles\n                      <button mat-button (click)=\"ExportCSV()\" class=\"btn btn-info  btn-sm btn-just-icon float-right\">\n                        <i class=\"material-icons\">cloud_download</i>\n                      </button> &nbsp;\n                    </h3>\n                  </div>\n                  <div class=\"col-sm-12 col-lg-5 col-md-5 float-right searchfilter\">\n                    <mat-form-field>\n          \n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" id=\"ProductSearchFilter\" placeholder=\"search\">\n          \n                    </mat-form-field>\n          \n                  </div>\n          \n          \n          \n          \n                </div>\n          \n                <div class=\"card-body\">\n          \n                  <div class=\"table-responsive\">\n                    <table mat-table [dataSource]=\"dataSource\" class=\"table table-hover \" matSort>\n          \n                      <ng-container matColumnDef=\"Year\">\n                        <th mat-header-cell *matHeaderCellDef width=\"10%\" > Year </th>\n                        <td mat-cell *matCellDef=\"let p\"> {{p.Year}} </td>\n                      </ng-container>\n                      \n                      <ng-container matColumnDef=\"Make\">\n                        <th mat-header-cell *matHeaderCellDef width=\"10%\" style=\"padding-left: 0px;\" mat-sort-header> Make\n                        </th>\n                        <td mat-cell *matCellDef=\"let p\" style=\"padding-left: 0px;\"> {{p.Make}} </td>\n                      </ng-container>\n          \n                      <ng-container matColumnDef=\"Model\">\n                        <th mat-header-cell *matHeaderCellDef  mat-sort-header width=\"15%\" > Model </th>\n                        <td mat-cell *matCellDef=\"let p\"> {{p.Model}} </td>\n                      </ng-container>\n          \n                 \n          \n                      <ng-container matColumnDef=\"EngineSize\">\n                        <th mat-header-cell *matHeaderCellDef width=\"10%\" > EngineSize </th>\n                        <td mat-cell *matCellDef=\"let p\"> {{p.EngineSize}} </td>\n                      </ng-container>\n          \n                      <ng-container matColumnDef=\"VIN\">\n                        <th mat-header-cell *matHeaderCellDef width=\"15%\" > VIN </th>\n                        <td mat-cell *matCellDef=\"let p\"> {{p.VIN}} </td>\n                      </ng-container>\n          \n                      <ng-container matColumnDef=\"Description\">\n                        <th mat-header-cell *matHeaderCellDef width=\"30%\" > Note </th>\n                        <td mat-cell *matCellDef=\"let p\"> {{p.Description}} </td>\n                      </ng-container>\n                 \n          \n                      <ng-container matColumnDef=\"Actions\">\n                        <th mat-header-cell *matHeaderCellDef width=\"10%\"  style=\"padding-right: 0px;\" > Actions </th>\n                        <td mat-cell *matCellDef=\"let p\" style=\"padding-right: 0px;\">\n                          <span>\n                            <div class=\"btn-group btn-group-sm\">\n                              <button mat-button (click)=\"Edit(p)\" class=\"btn btn-info  btn-sm btn-just-icon\">\n                                <i class=\"material-icons\">edit</i>\n                              </button> &nbsp;\n                              <button mat-button (click)=\"DeleteVehicle(p.ID)\" class=\"btn btn-rose btn-sm  btn-just-icon\">\n                                <i class=\"material-icons\">delete</i>\n                              </button> &nbsp;\n                              <!-- <button mat-button (click)=\"DeleteProduct(p.ID)\" class=\"btn btn-success btn-sm  btn-just-icon\">\n                                <i class=\"material-icons\">directions_car</i>\n                              </button> -->\n                            </div>\n          \n                          </span>\n                        </td>\n                      </ng-container>\n          \n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                    </table>\n          \n                    <mat-paginator [pageSizeOptions]=\"[6,10,20]\" showFirstLastButtons></mat-paginator>\n                  </div>\n                </div>\n              </div>\n          </div>\n          \n\n          <div class=\"col-md-6 col-lg-4\">\n            <div class=\"card \">\n                <div class=\"card-header card-header-info card-header-icon\">\n                    <div class=\"card-icon\">\n                        <i class=\"material-icons\">directions_car</i>\n                    </div>\n                    <h3 class=\"card-title\">Vehicle Registration </h3>\n        \n        \n                </div>\n                <div class=\"card-body\">\n        \n        \n                    <form #VehicleForm=\"ngForm\" method=\"POST\" autocomplete=\"off\" class=\"form-horizontal\" >\n        \n                      <mat-form-field>\n                        <mat-label>Year</mat-label>\n                        <input matInput required [(ngModel)]=\"aVehicle.Year\" name=\"Year\" >\n                    </mat-form-field>\n                         \n                            <mat-form-field>\n                                <mat-label>Make</mat-label>\n                                <input matInput required [(ngModel)]=\"aVehicle.Make\" [matAutocomplete]=\"autoMake\" [formControl]=\"myControl\" name=\"Make\" >\n                                <mat-autocomplete #autoMake=\"matAutocomplete\">\n                                <mat-option *ngFor=\"let m of filteredOptions | async\" [value]=\"m\">\n                                   {{m}}\n                                 </mat-option>\n                                </mat-autocomplete>\n                            </mat-form-field>\n\n                            <mat-form-field>\n                              <mat-label>Model</mat-label>\n                              <input matInput required [(ngModel)]=\"aVehicle.Model\" [matAutocomplete]=\"autoModel\" [formControl]=\"myControlModel\" name=\"Model\" (focus)=\"OnFocusModel()\" >\n                              <mat-autocomplete #autoModel=\"matAutocomplete\">\n                              <mat-option *ngFor=\"let mod of filteredOptionsModel | async\" [value]=\"mod\">\n                                 {{mod}}\n                               </mat-option>\n                              </mat-autocomplete>\n                          </mat-form-field>\n      \n                            <!-- <mat-form-field>\n                                <mat-label>Model</mat-label>\n                                <input matInput required [(ngModel)]=\"aVehicle.Model\" name=\"Model\"  (focus)=\"OnFocusModel()\">\n                            </mat-form-field>  -->\n        \n                         \n        \n                            <mat-form-field>\n                                <mat-label>Engine</mat-label>\n                                <input matInput required [(ngModel)]=\"aVehicle.EngineSize\"  name=\"EngineSize\">\n                            </mat-form-field>\n        \n        \n                            <mat-form-field>\n                                <mat-label>VIN</mat-label>\n                                <input matInput required [(ngModel)]=\"aVehicle.VIN\" name=\"VIN\">\n                            </mat-form-field>\n        \n                            <mat-form-field>\n                                <mat-label>Note</mat-label>\n                                <input matInput required [(ngModel)]=\"aVehicle.Description\" name=\"Description\">\n                            </mat-form-field>\n                \n        \n                            <br> \n                           \n                      \n                           \n                            <button mat-button class=\"  btn btn-info float-right\" [disabled]=\"VehicleForm.invalid || !IsCustomerExist() \" \n                            (click)=\"AddUpdateVehicle(VehicleForm)\"><span> <i\n                                    class=\"material-icons\">add_to_photos</i> &nbsp; Save Changes</span> </button>\n                            \n                     \n            \n        \n        \n                </form>\n            </div>\n        </div>\n        </div>\n        \n    </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Controllers/customer/customer.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Controllers/customer/customer.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card card-plain\">\n        <div class=\"card-header card-header-tabs card-header-info\">\n          <div class=\"nav-tabs-navigation\">\n            <div class=\"nav-tabs-wrapper\">\n  \n              <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                <li class=\"nav-item\" >\n                  <a  class=\"nav-link\" mat-button  href=\"#list\" routerLinkActive=\"active\" routerLink=\"list\"  data-toggle=\"tab\">\n                    <i class=\"material-icons\">group</i> Customers \n                    <div class=\"ripple-container\"></div>\n                  </a>\n                </li>\n              \n                <li class=\"nav-item\"  >\n                    <a  class=\"nav-link\" mat-button href=\"#setting\" routerLinkActive=\"active\"   routerLink=\"setting\" data-toggle=\"tab\">\n                      <i class=\"material-icons\">library_add</i> Add / Update Customer\n                      <div class=\"ripple-container\"></div>\n                    </a>\n                  </li>\n  \n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n        <!-- <div class=\"card-body\"> -->\n          <div class=\"tab-content\">\n            <router-outlet></router-outlet>\n          </div>\n  \n        <!-- </div> -->\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Controllers/repair/repair-setting/repair-setting.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Controllers/repair/repair-setting/repair-setting.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"card \">\r\n      <div class=\"card-header card-header-info card-header-icon\">\r\n        <div class=\"card-icon\">\r\n          <i class=\"material-icons\">build</i>\r\n        </div>\r\n        <h3 class=\"card-title\">Repair </h3>\r\n\r\n\r\n      </div>\r\n      <div class=\"card-body\">\r\n\r\n\r\n\r\n\r\n\r\n        <!-- <label class=\"hidden\">{{aRepair.ID}}</label> -->\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3\">\r\n            <mat-form-field>\r\n              <mat-label>Customer </mat-label>\r\n              <input matInput required disabled [(ngModel)]=\"searchModel.CustomerFullName\" name=\"CustomerFullName\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3\">\r\n            <mat-form-field>\r\n              <mat-label>Make</mat-label>\r\n              <input matInput required disabled [(ngModel)]=\"searchModel.Make\" name=\"Make\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3\">\r\n            <mat-form-field>\r\n              <mat-label>Model</mat-label>\r\n              <input matInput readonly disabled [(ngModel)]=\"searchModel.Model\" name=\"Model\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3\">\r\n            <mat-form-field>\r\n              <mat-label>VIN</mat-label>\r\n              <input matInput readonly disabled [(ngModel)]=\"searchModel.VIN\" name=\"VIN\">\r\n            </mat-form-field> <br>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <form #RepairForm=\"ngForm\" method=\"POST\" autocomplete=\"off\">\r\n          <div class=\"row\">\r\n\r\n\r\n\r\n            <div class=\"col-lg-3\">\r\n              <mat-form-field>\r\n                <mat-label>Visiting Date</mat-label>\r\n                <input matInput readonly required [matDatepicker]=\"visitingDatePicker\" [(ngModel)]=\"repairModel.Date\"\r\n                  name=\"Date\">\r\n                <mat-datepicker-toggle [for]=\"visitingDatePicker\" matSuffix></mat-datepicker-toggle>\r\n                <mat-datepicker #visitingDatePicker></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-lg-9\">\r\n              <mat-form-field>\r\n                <mat-label>Reason</mat-label>\r\n                <input matInput required [(ngModel)]=\"repairModel.Reason\" name=\"Reason\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-lg-12\">\r\n              <mat-form-field>\r\n                <mat-label>Work Performed</mat-label>\r\n                <input matInput required [(ngModel)]=\"repairModel.WorkPerformed\" name=\"WorkPerformed\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6\">\r\n              <mat-form-field>\r\n                <mat-label>Suggestion</mat-label>\r\n                <input matInput [(ngModel)]=\"repairModel.Suggestion\" name=\"Suggestion\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6\">\r\n              <mat-form-field>\r\n                <mat-label>Note</mat-label>\r\n                <input matInput [(ngModel)]=\"repairModel.Note\" name=\"Note\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-lg-2\">\r\n              <mat-form-field>\r\n                <mat-label>Next Appointment Date </mat-label>\r\n                <input matInput readonly required [matDatepicker]=\"NextAppointment\" [(ngModel)]=\"repairModel.NextAppointment \"\r\n                  name=\"NextAppointment\">\r\n                <mat-datepicker-toggle [for]=\"NextAppointment\" matSuffix></mat-datepicker-toggle>\r\n                <mat-datepicker #NextAppointment></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n\r\n            <!-- <div class=\"col-lg-2\">\r\n          <mat-form-field>\r\n              <mat-label>Next Appointment Time</mat-label>\r\n              <input matInput    [(ngModel)]=\"repairModel.NextAppointmentTime\" name=\"NextAppointmentTime\">\r\n          </mat-form-field>\r\n        </div> -->\r\n\r\n            <div class=\"col-lg-2\">\r\n              <mat-form-field>\r\n                <mat-label>Next Appointment Time</mat-label>\r\n                <input matInput aria-label=\"12hr format\" [ngxTimepicker]=\"default\" readonly\r\n                  [(ngModel)]=\"repairModel.NextAppointmentTime\" name=\"NextAppointmentTime\">\r\n                <ngx-material-timepicker #default></ngx-material-timepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-lg-2\">\r\n              <mat-form-field>\r\n                <mat-label>Status</mat-label>\r\n                <mat-select required [(value)]=\"repairModel.Status\" name=\"Status\">\r\n                  <mat-option>None</mat-option>\r\n                  <mat-option required *ngFor=\"let s of statusList\" [value]=\"s\">\r\n                    {{s}}</mat-option>\r\n\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <div class=\"col-lg-2\">\r\n\r\n              <input type=\"file\" multiple (change)=\"onFileSelected($event)\" #fileInput id=\"file\">\r\n\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"col-lg-4\">\r\n              <button mat-button class=\"  btn btn-info float-right\" (click)=\"AddUpdateRepair(RepairForm)\"\r\n                [disabled]=\" RepairForm.invalid || repairModel.Status==null  \"><span> <i\r\n                    class=\"material-icons\">add_to_photos</i> &nbsp; Save Changes</span> </button>\r\n            </div>\r\n\r\n\r\n\r\n\r\n          </div>\r\n        </form>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"col-lg-9\" id=\"tryPrint\">\r\n    <div class=\"card \">\r\n\r\n      <div class=\"card-header card-header-info card-header-icon\">\r\n        <div class=\"card-icon\">\r\n          <i class=\"material-icons\">history</i>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12\">\r\n          <h3 class=\"card-title \">Repair History\r\n            <button mat-button class=\"btn btn-info  btn-sm btn-just-icon float-right\" data-toggle=\"modal\"\r\n              data-target=\"#myModal\">\r\n              <i class=\"material-icons\">print</i>\r\n            </button> &nbsp;\r\n          </h3>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-lg-2 col-md-3  float-right searchfilter\" >\r\n          <mat-form-field>                            \r\n              <input matInput readonly [matDatepicker]=\"DateTo\" [(ngModel)]=\"DateToModel\" placeholder=\"Date To\" (ngModelChange)=\"GetHistoryByDate()\" name=\"DateToModel\">\r\n         <mat-datepicker-toggle [for]=\"DateTo\" matSuffix></mat-datepicker-toggle>\r\n        <mat-datepicker #DateTo > </mat-datepicker>   \r\n        </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-lg-2 col-md-3  float-right searchfilter\" >\r\n          <mat-form-field>                            \r\n              <input matInput readonly [matDatepicker]=\"DateFrom\" [(ngModel)]=\"DateFromModel\" placeholder=\"Date From\" (ngModelChange)=\"GetHistoryByDate()\"   name=\"DateFromModel\">\r\n         <mat-datepicker-toggle [for]=\"DateFrom\" matSuffix></mat-datepicker-toggle>\r\n        <mat-datepicker #DateFrom > </mat-datepicker>   \r\n        </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-lg-2 col-md-2 float-right searchfilter\">\r\n          <mat-form-field>\r\n\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" id=\"ProductSearchFilter\" placeholder=\"search\">\r\n\r\n          </mat-form-field>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"table-responsive\">\r\n          <table mat-table [dataSource]=\"dataSource\" class=\"table table-hover \">\r\n\r\n\r\n            <ng-container matColumnDef=\"Date\">\r\n              <th mat-header-cell *matHeaderCellDef width=\"10%\" style=\"padding-left: 0px;\"> Date\r\n              </th>\r\n              <td mat-cell *matCellDef=\"let p\" style=\"padding-left: 0px;\"> {{p.Date | date:'dd/MM/yyyy'}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"Reason\">\r\n              <th mat-header-cell *matHeaderCellDef width=\"15%\"> Reason </th>\r\n              <td mat-cell *matCellDef=\"let p\"> {{p.Reason}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"WorkPerformed\">\r\n              <th mat-header-cell *matHeaderCellDef width=\"10%\"> WorkPerformed </th>\r\n              <td mat-cell *matCellDef=\"let p\"> {{p.WorkPerformed}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"Suggestion\">\r\n              <th mat-header-cell *matHeaderCellDef width=\"10%\"> Suggestion </th>\r\n              <td mat-cell *matCellDef=\"let p\"> {{p.Suggestion}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"Note\">\r\n              <th mat-header-cell *matHeaderCellDef width=\"15%\"> Note </th>\r\n              <td mat-cell *matCellDef=\"let p\"> {{p.Note | uppercase}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"NextAppointment\">\r\n              <th mat-header-cell *matHeaderCellDef width=\"20%\"> NextAppointment </th>\r\n              <td mat-cell *matCellDef=\"let p\"> {{p.NextAppointment | date:'dd/MM/yyyy'}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"NextAppointmentTime\">\r\n              <th mat-header-cell *matHeaderCellDef width=\"10%\"> Time </th>\r\n              <td mat-cell *matCellDef=\"let p\"> {{p.NextAppointmentTime}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"Status\">\r\n              <th mat-header-cell *matHeaderCellDef width=\"10%\"> Status </th>\r\n              <td mat-cell *matCellDef=\"let p\"> {{p.Status}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"UserName\">\r\n              <th mat-header-cell *matHeaderCellDef width=\"30%\"> AddedBy </th>\r\n              <td mat-cell *matCellDef=\"let p\"> {{p.UserName}} </td>\r\n            </ng-container>\r\n\r\n\r\n            <ng-container matColumnDef=\"Actions\">\r\n              <th mat-header-cell *matHeaderCellDef width=\"10%\" style=\"padding-right: 0px;\"> Actions </th>\r\n              <td mat-cell *matCellDef=\"let p\" style=\"padding-right: 0px;\">\r\n                <span>\r\n                  <div class=\"btn-group btn-group-sm\">\r\n                    <button mat-button (click)=\"Edit(p)\" class=\"btn btn-info  btn-sm btn-just-icon\">\r\n                      <i class=\"material-icons\">edit</i>\r\n                    </button> &nbsp;\r\n                    <button mat-button (click)=\"DeleteVisit(p.ID)\" class=\"btn btn-rose btn-sm  btn-just-icon\">\r\n                      <i class=\"material-icons\">delete</i>\r\n                    </button> &nbsp;\r\n                    <!-- <button mat-button (click)=\"DeleteProduct(p.ID)\" class=\"btn btn-success btn-sm  btn-just-icon\">\r\n                                <i class=\"material-icons\">directions_car</i>\r\n                              </button> -->\r\n                  </div>\r\n\r\n                </span>\r\n              </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns1;\"></tr>\r\n          </table>\r\n\r\n          <mat-paginator #DataPaginator [pageSizeOptions]=\"[2,10,20]\" showFirstLastButtons></mat-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-lg-3\">\r\n    <div class=\"card \">\r\n\r\n      <div class=\"card-header card-header-info card-header-icon\">\r\n        <div class=\"card-icon\">\r\n          <i class=\"material-icons\">collections</i>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12\">\r\n          <h3 class=\"card-title \">Images\r\n\r\n          </h3>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"table-responsive\">\r\n          <table mat-table [dataSource]=\"ImageSource\" class=\"table table-hover \">\r\n\r\n\r\n\r\n            <ng-container matColumnDef=\"Data\">\r\n              <th mat-header-cell *matHeaderCellDef width=\"30%\" style=\"padding-left: 0px;\"> Image\r\n              </th>\r\n              <!-- <td mat-cell *matCellDef=\"let p\" style=\"padding-left: 0px;\">   <img src=\"{{'data:image/png;base64,' + p.Data}}\"  width=\"100\" height=\"50\" /> </td> -->\r\n              <td mat-cell *matCellDef=\"let p\" style=\"padding-left: 0px;\"> <img src=\"{{HostPath}}{{p.ImagePath}}\"\r\n                  width=\"100\" height=\"50\" /> </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"View\">\r\n              <th mat-header-cell *matHeaderCellDef> View\r\n              </th>\r\n\r\n              <td mat-cell *matCellDef=\"let p\"> <a mat-button class=\"btn btn-success btn-sm  btn-just-icon\"\r\n                  target=\"_blank\" rel=\"noopener noreferrer\" href=\"{{HostPath}}{{p.ImagePath}}\">\r\n                  <i class=\"material-icons\">remove_red_eye</i>\r\n                </a>\r\n\r\n\r\n              </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"Action\">\r\n              <th mat-header-cell *matHeaderCellDef width=\"5%\" style=\"padding-right: 0px;\"> Delete </th>\r\n              <td mat-cell *matCellDef=\"let p\" style=\"padding-right: 0px;\">\r\n                <span>\r\n                  <div class=\"btn-group btn-group-sm\">\r\n\r\n                    <!-- <a mat-button  class=\"btn btn-success btn-sm  btn-just-icon\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"{{HostPath}}{{p.ImagePath}}\">\r\n                                <i class=\"material-icons\">remove_red_eye</i>\r\n                              </a> &nbsp; -->\r\n                    <button mat-button (click)=\"DeleteImage(p.ID)\" class=\"btn btn-rose btn-sm  btn-just-icon\">\r\n                      <i class=\"material-icons\">delete</i>\r\n                    </button> &nbsp;\r\n\r\n                  </div>\r\n\r\n                </span>\r\n              </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns2;\"></tr>\r\n          </table>\r\n\r\n          <mat-paginator #ImagePaginator [pageSizeOptions]=\"[2,10,20]\" showFirstLastButtons></mat-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-lg-12\">\r\n    <!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n      Open modal\r\n    </button> -->\r\n\r\n    <!-- The Modal -->\r\n    <div class=\"modal\" id=\"myModal\">\r\n      <div class=\"modal-dialog modal-xl\">\r\n        <div class=\"modal-content\">\r\n\r\n          <!-- Modal Header -->\r\n          <div class=\"modal-header\">\r\n            <button mat-button class=\"btn btn-info  \" printSectionId=\"tryPrint2\" ngxPrint [useExistingCss]=\"true\">\r\n              <i class=\"material-icons\">print</i> Print\r\n            </button>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n\r\n          <!-- Modal body -->\r\n          <div class=\"modal-body\">\r\n            <div id=\"tryPrint2\">\r\n              <h2 align=\"center\" style=\"font-weight: bold;\">Auto<span style=\"color: red;\">Shack</span> Workshop Suite</h2>\r\n              <h4 align=\"center\" style=\"margin-top: -15px;\">13 High Tension Line, Amasaman, Ghana</h4>\r\n              <h4 align=\"center\" style=\"margin-top: -10px;\">Web: www.autoshackghana.com | Phone: +233 57 697 4225 </h4>\r\n              <h3 align=\"center\" style=\"font-weight: bold;  margin:-10px\">Repair History Report</h3>\r\n              <div class=\"\">\r\n\r\n<br>\r\n                <p align=\"left\" style=\" padding-right: 15px; \"><span style=\"font-weight: bold;\">Date : </span> {{today | date:'MMM d, y | hh:mm:ss a'}}</p>\r\n                <table >\r\n\r\n\r\n\r\n<h3 style=\"color: red;\">Customer Detail</h3>\r\n                  <tr>\r\n                    <td style=\"font-weight: bold; padding:5px; width: 170px;\" >Customer </td>\r\n                    <td>  {{searchModel.CustomerFullName}}</td>\r\n\r\n                  </tr>\r\n                  <tr>\r\n                    <td style=\"font-weight: bold; padding:5px; \">Phone </td>\r\n                    <td>  {{searchModel.Phone}}</td>\r\n\r\n                  </tr>\r\n                  <tr>\r\n                    <td style=\"font-weight: bold; padding:5px;\">Make</td>\r\n                    <td>  {{searchModel.Make}}</td>\r\n\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td style=\"font-weight: bold; padding:5px;\">Model </td>\r\n                    <td>  {{searchModel.Model}}</td>\r\n\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td style=\"font-weight: bold; padding:5px;\">VIN </td>\r\n                    <td>  {{searchModel.VIN}}</td>\r\n             \r\n                  </tr>\r\n\r\n                  <!-- <tr [hidden]=\"IsDateUndefined()\">\r\n                    <td style=\"font-weight: bold; padding:5px;\">From </td>\r\n                    <td>  {{DateFromModel | date:'dd/MM/yyyy'}} <span style=\"font-weight: bold; padding:5px;\">To</span>  {{   DateToModel | date:'dd/MM/yyyy'}}</td>\r\n             \r\n                  </tr> -->\r\n                </table>\r\n                <table>\r\n\r\n                  <h3 style=\"color: red;\">Latest Work Detail</h3>\r\n                  <tr>\r\n                    <td style=\"font-weight: bold; padding:5px;width: 170px;\" valign=\"top\">Visiting Reason </td>\r\n                    <td *ngIf=\"RepairList?.length > 0\" >  {{RepairList[0].Reason}}</td>\r\n\r\n                  </tr>\r\n                  <tr>\r\n                    <td style=\"font-weight: bold; padding:5px; \" valign=\"top\">Work Performed </td>\r\n                    <td *ngIf=\"RepairList?.length > 0\">  {{RepairList[0].WorkPerformed}}</td>\r\n\r\n                  </tr>\r\n                  <tr>\r\n                    <td style=\"font-weight: bold; padding:5px;\" valign=\"top\">Suggestion</td>\r\n                    <td *ngIf=\"RepairList?.length > 0\">  {{RepairList[0].Suggestion}}</td>\r\n\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td style=\"font-weight: bold; padding:5px;\" valign=\"top\">Note </td>\r\n                    <td *ngIf=\"RepairList?.length > 0\">  {{RepairList[0].Note}}</td>\r\n\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td style=\"font-weight: bold; padding:5px;\" valign=\"top\">Next Appointment </td>\r\n                    <td *ngIf=\"RepairList?.length > 0\">  {{RepairList[0].NextAppointment | date:'dd/MM/yyyy'}}</td>\r\n             \r\n                  </tr>\r\n\r\n\r\n                 \r\n                  <!-- <h4>Customer Name {{searchModel.CustomerFullName}}</h4> -->\r\n                </table>\r\n                <!-- <p align=\"right\" style=\"margin-top: -28px; padding-right: 15px; \"><span style=\"font-weight: bold;\">Date : </span> {{today | date:'MMM d, y | hh:mm:ss a'}}</p> -->\r\n              </div>\r\n\r\n       \r\n              <div class=\"table-responsive\" [hidden] = \"IsSingleRow()\">\r\n                <h3 style=\"color: red;\">Work History <span [hidden]=\"IsDateUndefined()\" style=\"font-size: medium; color: #424242;\">( from <span style=\"font-weight: bold;\">{{DateFromModel | date:'dd/MM/yyyy'}} </span> to  <span style=\"font-weight: bold;\">{{   DateToModel | date:'dd/MM/yyyy'}}</span>  )</span></h3>\r\n                <table mat-table [dataSource]=\"PrintDatasource\" class=\"table table-strip \">\r\n\r\n\r\n                  <ng-container matColumnDef=\"Date\">\r\n                    <th mat-header-cell *matHeaderCellDef style=\"padding-left: 0px; color: #424242;\"> Date\r\n                    </th>\r\n                    <td mat-cell *matCellDef=\"let p\" style=\"padding-left: 0px;\"> {{p.Date | date:'dd/MM/yyyy'}} </td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"Reason\">\r\n                    <th mat-header-cell *matHeaderCellDef style=\"color: #424242;\"> Reason </th>\r\n                    <td mat-cell *matCellDef=\"let p\"> {{p.Reason}} </td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"WorkPerformed\">\r\n                    <th mat-header-cell *matHeaderCellDef style=\"color: #424242;\"> WorkPerformed </th>\r\n                    <td mat-cell *matCellDef=\"let p\"> {{p.WorkPerformed}} </td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"Suggestion\">\r\n                    <th mat-header-cell *matHeaderCellDef style=\"color: #424242;\"> Suggestion </th>\r\n                    <td mat-cell *matCellDef=\"let p\"> {{p.Suggestion}} </td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"Note\">\r\n                    <th mat-header-cell *matHeaderCellDef style=\"color: #424242;\"> Note </th>\r\n                    <td mat-cell *matCellDef=\"let p\"> {{p.Note }} </td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"NextAppointment\">\r\n                    <th mat-header-cell *matHeaderCellDef style=\"color: #424242;\"> NextAppointment </th>\r\n                    <td mat-cell *matCellDef=\"let p\"> {{p.NextAppointment | date:'dd/MM/yyyy'}} </td>\r\n                  </ng-container>\r\n\r\n\r\n\r\n\r\n                  <ng-container matColumnDef=\"UserName\">\r\n                    <th mat-header-cell *matHeaderCellDef style=\"color: #424242;\"> AddedBy </th>\r\n                    <td mat-cell *matCellDef=\"let p\"> {{p.UserName}} </td>\r\n                  </ng-container>\r\n\r\n\r\n\r\n\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns3\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns3;\"></tr>\r\n                </table>\r\n\r\n\r\n              </div>\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Modal footer -->\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n            <!-- <button mat-button class=\"btn btn-info  btn-sm btn-just-icon float-right\" printSectionId=\"tryPrint2\" ngxPrint [useExistingCss]=\"true\"   printTitle=\"MyTitle\">\r\n            <i class=\"material-icons\">cloud_download</i>\r\n          </button>  -->\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Controllers/repair/repair.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Controllers/repair/repair.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card card-plain\">\n      <div class=\"card-header card-header-tabs card-header-info\">\n        <div class=\"nav-tabs-navigation\">\n          <div class=\"nav-tabs-wrapper\">\n\n            <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n              <li class=\"nav-item\" >\n                <a  class=\"nav-link\" mat-button  href=\"#list\" routerLinkActive=\"active\" routerLink=\"list\"  data-toggle=\"tab\">\n                  <i class=\"material-icons\">directions_car</i> Vehicles \n                  <div class=\"ripple-container\"></div>\n                </a>\n              </li>\n            \n              <li class=\"nav-item disabledcustom\"   >\n                  <a  class=\"nav-link\" mat-button href=\"#setting\" routerLinkActive=\"active\"   routerLink=\"setting\" data-toggle=\"tab\">\n                    <i class=\"material-icons\">build</i> Repair\n                    <div class=\"ripple-container\"></div>\n                  </a>\n                </li>\n\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n      <!-- <div class=\"card-body\"> -->\n        <div class=\"tab-content\">\n          <router-outlet></router-outlet>\n        </div>\n\n      <!-- </div> -->\n\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Controllers/repair/vehicle-list/vehicle-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Controllers/repair/vehicle-list/vehicle-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\" col-md-12 col-lg-12\">\n    <div class=\"card \">\n\n      <div class=\"card-header card-header-info card-header-icon\">\n        <div class=\"card-icon\">\n          <i class=\"material-icons\">directions_car</i>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <h3 class=\"card-title \">Vehicle List\n            <button mat-button (click)=\"ExportCSV()\" class=\"btn btn-info  btn-sm btn-just-icon float-right\">\n              <i class=\"material-icons\">cloud_download</i>\n            </button> &nbsp;\n          </h3>\n        </div>\n        <div class=\"col-sm-12 col-lg-3 col-md-5 float-right searchfilter\">\n          <mat-form-field>\n\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" id=\"ProductSearchFilter\" placeholder=\"search\">\n\n          </mat-form-field>\n\n        </div>\n\n\n\n\n      </div>\n\n      <div class=\"card-body\">\n\n        <div class=\"table-responsive\">\n          <table mat-table [dataSource]=\"dataSource\" class=\"table table-hover \" matSort>\n\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"CustomerFullName\">\n              <th mat-header-cell *matHeaderCellDef  style=\"padding-left: 0px;\" mat-sort-header width=\"15%\" > CustomerName\n              </th>\n              <td mat-cell *matCellDef=\"let p\" style=\"padding-left: 0px;\"> {{p.CustomerFullName}} </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"Phone\">\n              <th mat-header-cell *matHeaderCellDef  mat-sort-header width=\"10%\"> Phone </th>\n              <td mat-cell *matCellDef=\"let p\"> {{p.Phone}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Make\">\n              <th mat-header-cell *matHeaderCellDef width=\"15%\"> Make </th>\n              <td mat-cell *matCellDef=\"let p\"> {{p.Make}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Model\">\n              <th mat-header-cell *matHeaderCellDef width=\"15%\"> Model </th>\n              <td mat-cell *matCellDef=\"let p\"> {{p.Model}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Year\" width=\"15%\">\n              <th mat-header-cell *matHeaderCellDef > Year </th>\n              <td mat-cell *matCellDef=\"let p\"> {{p.Year}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"EngineSize\">\n              <th mat-header-cell *matHeaderCellDef width=\"10%\"> EngineSize </th>\n              <td mat-cell *matCellDef=\"let p\"> {{p.EngineSize}} </td>\n            </ng-container>\n\n            <!-- <ng-container matColumnDef=\"VIN\">\n              <th mat-header-cell *matHeaderCellDef width=\"15%\" > VIN </th>\n              <td mat-cell *matCellDef=\"let p\"> {{p.VIN}} </td>\n            </ng-container> -->\n       \n            <ng-container matColumnDef=\"Description\">\n              <th mat-header-cell *matHeaderCellDef width=\"15%\" > Description </th>\n              <td mat-cell *matCellDef=\"let p\"> {{p.Description}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Actions\" >\n              <th mat-header-cell *matHeaderCellDef width=\"5%\" style=\"padding-right: 0px;\"  > Repair </th>\n              <td mat-cell *matCellDef=\"let p\" style=\"padding-right: 0px;\">\n                <span>\n                  <div class=\"btn-group btn-group-sm\">\n                    <button mat-button (click)=\"Edit(p)\" class=\"btn btn-success  btn-sm btn-just-icon\">\n                      <i class=\"material-icons\">build</i>\n                    </button> &nbsp;\n   \n          \n                  </div>\n\n                </span>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n\n          <mat-paginator [pageSizeOptions]=\"[10,20,50]\" showFirstLastButtons></mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Controllers/setting/setting.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Controllers/setting/setting.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card card-plain\">\n        <div class=\"card-header card-header-info\">\n            <h4 class=\"card-title\">Settings</h4>\n            <p class=\"card-category\">Vehicle Settings  </p>\n           \n        </div>\n     \n    </div>     \n</div>\n\n\n\n  <div class=\"col-lg-7\">\n      <div class=\"card \">\n\n          <div class=\"card-header card-header-info card-header-icon\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">local_car_wash</i>\n            </div>\n    \n            <div class=\"col-sm-12\">\n              <h3 class=\"card-title \">Vehicles\n              \n              </h3>\n            </div>\n            <!-- <div class=\"col-sm-12 col-lg-2 col-md-5 float-right searchfilter\">\n              <mat-form-field>\n    \n                <input matInput (keyup)=\"applyFilter($event.target.value)\" id=\"ProductSearchFilter\" placeholder=\"search\">\n    \n              </mat-form-field>\n    \n            </div> -->\n    \n    \n    \n    \n          </div>\n    \n          <div class=\"card-body\">\n    \n            <div class=\"table-responsive\">\n              <table mat-table [dataSource]=\"dataSource\" class=\"table table-hover \">\n    \n            \n                <ng-container matColumnDef=\"Make\">\n                  <th mat-header-cell *matHeaderCellDef width=\"40%\" style=\"padding-left: 0px;\" > Make\n                  </th>\n                  <td mat-cell *matCellDef=\"let p\" style=\"padding-left: 0px;\"> {{p.Make}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"Model\">\n                  <th mat-header-cell *matHeaderCellDef width=\"40%\" style=\"padding-left: 0px;\" > Model\n                  </th>\n                  <td mat-cell *matCellDef=\"let p\" style=\"padding-left: 0px;\"> {{p.Model}} </td>\n                </ng-container>\n             \n    \n    \n                <ng-container matColumnDef=\"Active\">\n                  <th mat-header-cell *matHeaderCellDef width=\"15%\"> Active </th>\n                  <td mat-cell *matCellDef=\"let p\"> \n                          <i [hidden]=!p.Active class=\"material-icons text-success\">done</i>    \n                  </td>\n                </ng-container>\n           \n           \n    \n                <ng-container matColumnDef=\"Actions\">\n                  <th mat-header-cell *matHeaderCellDef width=\"5%\"  style=\"padding-right: 0px;\" > Actions </th>\n                  <td mat-cell *matCellDef=\"let p\" style=\"padding-right: 0px;\">\n                    <span>\n                      <div class=\"btn-group btn-group-sm\">\n                        <button mat-button (click)=\"Edit(p)\" class=\"btn btn-info  btn-sm btn-just-icon\">\n                          <i class=\"material-icons\">edit</i>\n                        </button> &nbsp;\n                \n                 \n                      </div>\n    \n                    </span>\n                  </td>\n                </ng-container>\n    \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n    \n              <mat-paginator [pageSizeOptions]=\"[6,10,20]\" showFirstLastButtons></mat-paginator>\n            </div>\n          </div>\n        </div>\n    </div>\n    \n\n    <div class=\"col-md-6 col-lg-5\">\n      <div class=\"card \">\n          <div class=\"card-header card-header-info card-header-icon\">\n              <div class=\"card-icon\">\n                  <i class=\"material-icons\">directions_car</i>\n              </div>\n              <h3 class=\"card-title\">Add Vehicle</h3>\n  \n  \n          </div>\n          <div class=\"card-body\">\n  \n  \n              <form #VehicleForm=\"ngForm\" method=\"POST\" autocomplete=\"off\" class=\"form-horizontal\" >\n  \n                \n                <mat-form-field>\n                  <mat-label>Make</mat-label>\n                  <input matInput required [(ngModel)]=\"aMake.Make\" name=\"Make\">\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>Model</mat-label>\n                <input matInput required [(ngModel)]=\"aMake.Model\" name=\"Model\">\n            </mat-form-field>\n  \n            \n            <mat-checkbox color=\"primary\" #Active=\"ngModel\" [(ngModel)]=\"aMake.Active\"\n            name=\"Active\">\n            Is Active\n     \n        </mat-checkbox>\n\n          \n  \n                      <br> \n                     \n                \n                     \n                      <button mat-button class=\"  btn btn-info float-right\" [disabled]=\"VehicleForm.invalid  \" \n                      (click)=\"AddUpdateVehicle(VehicleForm)\"><span> <i\n                              class=\"material-icons\">add_to_photos</i> &nbsp; Save Changes</span> </button>\n                      \n               \n      \n  \n  \n          </form>\n      </div>\n  </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Controllers/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Controllers/user/user.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card card-plain\">\r\n                <div class=\"card-header card-header-info\">\r\n                    <h4 class=\"card-title\">User Settings</h4>\r\n                    <p class=\"card-category\">Create / Update Users  </p>\r\n                   \r\n                </div>\r\n             \r\n            </div>     \r\n        </div>\r\n              \r\n        <div class=\"col-md-6 col-lg-4\">\r\n            <div class=\"card \">\r\n                <div class=\"card-header card-header-info card-header-icon\">\r\n                    <div class=\"card-icon\">\r\n                        <i class=\"material-icons\">edit</i>\r\n                    </div>\r\n                    <h3 class=\"card-title\">Update User </h3>\r\n        \r\n        \r\n                </div>\r\n                <div class=\"card-body\">\r\n        \r\n        \r\n                    <form #UpdateForm=\"ngForm\" method=\"POST\" autocomplete=\"off\" class=\"form-horizontal\" >\r\n        \r\n                        <div class=\"col-md-12\">\r\n                            <label class=\"hidden\">{{UpdateUserModel.ID}}</label>\r\n                            <mat-form-field>\r\n                                <mat-label>User Name</mat-label>\r\n                                <input matInput required #UserName=\"ngModel\" (keyup)=\"CheckUpdateUserName()\"   [(ngModel)]=\"UpdateUserModel.UserName\" name=\"UserName\">\r\n                                <mat-hint>{{UpdateUserNameHintText}}</mat-hint>\r\n                            </mat-form-field>\r\n        \r\n                            <mat-form-field>\r\n                                <mat-label>First Name</mat-label>\r\n                                <input matInput required #FirstName=\"ngModel\" [(ngModel)]=\"UpdateUserModel.FirstName\" name=\"FirstName\">\r\n                            </mat-form-field>\r\n        \r\n                            <mat-form-field>\r\n                                <mat-label>Last Name</mat-label>\r\n                                <input matInput required  #LastName=\"ngModel\" [(ngModel)]=\"UpdateUserModel.LastName\" name=\"LastName\">\r\n                            </mat-form-field>\r\n        \r\n                            <mat-form-field>\r\n                                <mat-label>Email</mat-label>\r\n                                <input matInput required email #Email=\"ngModel\" [(ngModel)]=\"UpdateUserModel.Email\" name=\"Email\"  >\r\n                            </mat-form-field>\r\n        \r\n        \r\n                            <mat-form-field>\r\n                                <mat-label>Password</mat-label>\r\n                                <input matInput type=\"password\" required #Password=\"ngModel\" [(ngModel)]=\"UpdateUserModel.Password\" name=\"Password\">\r\n                            </mat-form-field>\r\n        \r\n  \r\n        \r\n                            <br> \r\n                           \r\n                            \r\n                           \r\n                            <button mat-button class=\"  btn btn-info float-right\"\r\n                            (click)=\"UpdateUser()\" [disabled]=\" UpdateForm.invalid || IsUpdateHintTextShown() \"><span> <i\r\n                                    class=\"material-icons\">edit</i> &nbsp; Update User</span> </button>\r\n                            \r\n                     \r\n                </div>\r\n        \r\n        \r\n                </form>\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n<div class=\"col-md-6 col-lg-4\">\r\n    <div class=\"card \">\r\n        <div class=\"card-header card-header-info card-header-icon\">\r\n            <div class=\"card-icon\">\r\n                <i class=\"material-icons\">add_to_photos</i>\r\n            </div>\r\n            <h3 class=\"card-title\">Create User </h3>\r\n\r\n\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n\r\n            <form #CreateForm=\"ngForm\" method=\"POST\" autocomplete=\"off\" class=\"form-horizontal\" >\r\n\r\n                <div class=\"col-md-12\">\r\n                    <label class=\"hidden\">{{NewUserModel.ID}}</label>\r\n                    <mat-form-field>\r\n                        <mat-label>User Name</mat-label>\r\n                        <input matInput required #UserName=\"ngModel\" (keyup)=\"CheckNewUserName()\"  [(ngModel)]=\"NewUserModel.UserName\" name=\"UserName\">\r\n                        <mat-hint>{{NewUserNameHintText}}</mat-hint>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                        <mat-label>First Name</mat-label>\r\n                        <input matInput required #FirstName=\"ngModel\" [(ngModel)]=\"NewUserModel.FirstName\" name=\"FirstName\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                        <mat-label>Last Name</mat-label>\r\n                        <input matInput required #LastName=\"ngModel\" [(ngModel)]=\"NewUserModel.LastName\" name=\"LastName\" >\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                        <mat-label>Email</mat-label>\r\n                        <input matInput required email #Email=\"ngModel\" [(ngModel)]=\"NewUserModel.Email\" name=\"Email\">\r\n                    </mat-form-field>\r\n\r\n\r\n                    <mat-form-field>\r\n                        <mat-label>Password</mat-label>\r\n                        <input matInput required type=\"password\" #Password=\"ngModel\" [(ngModel)]=\"NewUserModel.Password\" name=\"Password\">\r\n                    </mat-form-field>\r\n\r\n\r\n        \r\n\r\n                    <br> \r\n                   \r\n                    \r\n                   \r\n                    <button mat-button class=\"  btn btn-info float-right\" [disabled]=\"CreateForm.invalid || IsNewHintTextShown()\" \r\n                    (click)=\"AddNewUser(CreateForm)\"><span> <i\r\n                            class=\"material-icons\">add_to_photos</i> &nbsp; Create User</span> </button>\r\n                    \r\n             \r\n        </div>\r\n\r\n\r\n        </form>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        \r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <div class=\"row\">\r\n\r\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n              <div class=\"card card-stats\">\r\n                  <div class=\"card-header card-header-info card-header-icon\">\r\n                      <div class=\"card-icon\">\r\n                          <i class=\"material-icons\">event_note</i>\r\n                      </div>\r\n                      <p class=\"card-category\">Appointments Today</p>\r\n                      <h3 class=\"card-title\">{{todayAppointmentCount}}</h3>\r\n                  </div>\r\n                  <div class=\"card-footer\">\r\n                      <div class=\"stats\">\r\n                          <i class=\"material-icons\">event_note</i> &nbsp; Number of Appointments Today\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n              <div class=\"card card-stats\">\r\n                  <div class=\"card-header card-header-success card-header-icon\">\r\n                      <div class=\"card-icon\">\r\n                          <i class=\"material-icons\">directions_car</i>\r\n                      </div>\r\n                      <p class=\"card-category\">Repaired Today</p>\r\n                      <h3 class=\"card-title\">{{todayRepairCount}}</h3>\r\n                  </div>\r\n                  <div class=\"card-footer\">\r\n                      <div class=\"stats\">\r\n                          <i class=\"material-icons\">build</i> &nbsp; Number of Vehicles Repaired Today\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n      \r\n  \r\n\r\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header card-header-warning card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"material-icons\">event_note</i>\r\n                        </div>\r\n                        <p class=\"card-category\">Appointments Tomorrow</p>\r\n                        <h3 class=\"card-title\">{{tomorrowAppointmentCount}}</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">event_note</i> &nbsp; Number of Appointments Tomorrow\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header card-header-danger card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"material-icons\">directions_car</i>\r\n                        </div>\r\n                        <p class=\"card-category\">Repaired Yesterday</p>\r\n                        <h3 class=\"card-title\">{{yesterdayRepairCount}}</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">build</i> &nbsp; Number of Vehicles Repaired Yesterday\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    \r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n\r\n\r\n      \r\n      <div class=\" col-md-12 col-lg-12\">\r\n        <div class=\"card \">\r\n    \r\n          <div class=\"card-header card-header-rose card-header-icon\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">build</i>\r\n            </div>\r\n    \r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"card-title \">Repairing Status\r\n                  <button mat-button (click)=\"ExportRepairingNow()\" class=\"btn btn-rose  btn-sm btn-just-icon float-right\">\r\n                      <i class=\"material-icons\">cloud_download</i>\r\n                    </button> &nbsp;\r\n              </h3>\r\n            </div>\r\n\r\n            <!-- <div class=\"col-sm-12 col-lg-2 col-md-3 float-right searchfilter\">                         \r\n              <mat-form-field>   \r\n                 <input matInput (keyup)=\"applyFilterRepairingNow($event.target.value)\"  id=\"RepairingNowFilter\" placeholder=\"Search\">                    \r\n              </mat-form-field>                \r\n            </div> -->\r\n       \r\n\r\n            <div class=\"col-sm-12 col-lg-2 col-md-5 float-right searchfilter\">\r\n              <mat-form-field>\r\n                <mat-label>Status</mat-label>\r\n                <mat-select required [(value)]=\"Status\" (selectionChange)=\"OnFocusStatus()\" name=\"Status\">\r\n                    <mat-option>None</mat-option>\r\n                    <mat-option required *ngFor=\"let s of statusList\" [value]=\"s\">\r\n                        {{s}}</mat-option>\r\n    \r\n                </mat-select>\r\n            </mat-form-field>\r\n            </div>\r\n    \r\n            <div class=\"col-sm-12 col-lg-2 col-md-3  float-right searchfilter\" >\r\n              <mat-form-field>                            \r\n                  <input matInput readonly [matDatepicker]=\"RepairDateStatus\" [(ngModel)]=\"dateStatus\"   name=\"dateStatus\">\r\n             <mat-datepicker-toggle [for]=\"RepairDateStatus\" matSuffix></mat-datepicker-toggle>\r\n            <mat-datepicker #RepairDateStatus > </mat-datepicker>   \r\n            </mat-form-field>\r\n            </div>\r\n    \r\n    \r\n          </div>\r\n    \r\n          <div class=\"card-body\">\r\n              <div class=\"table-responsive\">\r\n                  <table mat-table [dataSource]=\"dataSourceRepairingNow\" class=\"table table-hover \" >\r\n        \r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"CustomerFullName\">\r\n                      <th mat-header-cell *matHeaderCellDef width=\"25%\"  style=\"padding-left: 0px;\"  > Customer\r\n                      </th>\r\n                      <td mat-cell *matCellDef=\"let p\" style=\"padding-left: 0px;\"> {{p.CustomerFullName}} </td>\r\n                    </ng-container>\r\n        \r\n             \r\n        \r\n                    <ng-container matColumnDef=\"Vehicle\">\r\n                      <th mat-header-cell *matHeaderCellDef width=\"25%\" > Vehicle </th>\r\n                      <td mat-cell *matCellDef=\"let p\"> {{p.Vehicle}} </td>\r\n                    </ng-container>\r\n        \r\n        \r\n           \r\n        \r\n                    <ng-container matColumnDef=\"Reason\">\r\n                      <th mat-header-cell *matHeaderCellDef width=\"25%\" > Reason </th>\r\n                      <td mat-cell *matCellDef=\"let p\"> {{p.Reason}} </td>\r\n                    </ng-container>\r\n        \r\n                    <ng-container matColumnDef=\"WorkPerformed\">\r\n                      <th mat-header-cell *matHeaderCellDef width=\"25%\" > Worked </th>\r\n                      <td mat-cell *matCellDef=\"let p\"> {{p.WorkPerformed}} </td>\r\n                    </ng-container>\r\n               \r\n               \r\n                 \r\n                   \r\n        \r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumnsRepairingNow\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumnsRepairingNow;\"></tr>\r\n                  </table>\r\n        \r\n                  <mat-paginator #paginatorRepairingNow [pageSizeOptions]=\"[3,10,20]\" showFirstLastButtons></mat-paginator>\r\n                </div>\r\n           \r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\" col-md-12 col-lg-12\">\r\n        <div class=\"card \">\r\n    \r\n          <div class=\"card-header card-header-info card-header-icon\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">event_note</i>\r\n            </div>\r\n    \r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"card-title \">Appointments Today\r\n                  <button mat-button (click)=\"AppointmentToday()\" class=\"btn btn-info  btn-sm btn-just-icon float-right\">\r\n                      <i class=\"material-icons\">cloud_download</i>\r\n                    </button> &nbsp;\r\n              </h3>\r\n            </div>\r\n            <div class=\"col-sm-12 col-lg-2 col-md-5 float-right searchfilter\">\r\n              <mat-form-field>    \r\n                <input matInput (keyup)=\"applyFilterAppointmentToday($event.target.value)\" id=\"TodayFilter\" placeholder=\"Search\">    \r\n              </mat-form-field>    \r\n            </div>\r\n            \r\n            <div class=\"col-sm-12 col-lg-2 col-md-3  float-right searchfilter\" >\r\n              <mat-form-field>                            \r\n                  <input matInput readonly [matDatepicker]=\"dateAppointmentLocal\" [(ngModel)]=\"dateAppointment\" placeholder=\"Select Date\" (ngModelChange)=\"GetAppointmentsByDate()\"  name=\"dateAppointment\">\r\n             <mat-datepicker-toggle [for]=\"dateAppointmentLocal\" matSuffix></mat-datepicker-toggle>\r\n            <mat-datepicker #dateAppointmentLocal > </mat-datepicker>   \r\n            </mat-form-field>\r\n            </div>\r\n    \r\n     \r\n    \r\n    \r\n          </div>\r\n    \r\n          <div class=\"card-body\">\r\n              <div class=\"table-responsive\">\r\n                  <table mat-table [dataSource]=\"dataSourceAppointmentToday\" class=\"table table-hover \" matSort>\r\n        \r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"CustomerFullName\">\r\n                      <th mat-header-cell *matHeaderCellDef  width=\"15%\" style=\"padding-left: 0px;\"  > Customer\r\n                      </th>\r\n                      <td mat-cell *matCellDef=\"let p\" style=\"padding-left: 0px;\"> {{p.CustomerFullName}} </td>\r\n                    </ng-container>\r\n        \r\n                    <ng-container matColumnDef=\"Phone\">\r\n                            <th mat-header-cell *matHeaderCellDef width=\"15%\" > Phone </th>\r\n                            <td mat-cell *matCellDef=\"let p\"> {{p.Phone}} </td>\r\n                          </ng-container>\r\n        \r\n\r\n                          <ng-container matColumnDef=\"Time\">\r\n                            <th mat-header-cell *matHeaderCellDef width=\"10%\" > Time </th>\r\n                            <td mat-cell *matCellDef=\"let p\"> {{p.Time}} </td>\r\n                          </ng-container>\r\n\r\n\r\n                    <ng-container matColumnDef=\"Vehicle\">\r\n                      <th mat-header-cell *matHeaderCellDef width=\"20%\"> Vehicle </th>\r\n                      <td mat-cell *matCellDef=\"let p\"> {{p.Vehicle}} </td>\r\n                    </ng-container>\r\n        \r\n        \r\n           \r\n                    <ng-container matColumnDef=\"Reason\">\r\n                      <th mat-header-cell *matHeaderCellDef width=\"20%\"> Reason </th>\r\n                      <td mat-cell *matCellDef=\"let p\"> {{p.Reason}} </td>\r\n                    </ng-container>\r\n  \r\n              <ng-container matColumnDef=\"Note\">\r\n                <th mat-header-cell *matHeaderCellDef width=\"20%\"> Note </th>\r\n                <td mat-cell *matCellDef=\"let p\"> {{p.Note}} </td>\r\n              </ng-container>\r\n        \r\n                \r\n               \r\n               \r\n        \r\n                   \r\n        \r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumnsAppointmentToday\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumnsAppointmentToday;\"></tr>\r\n                  </table>\r\n        \r\n                  <mat-paginator #paginatorAppointmentToday [pageSizeOptions]=\"[3,10,20]\" showFirstLastButtons></mat-paginator>\r\n                </div>\r\n           \r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n            <div class=\" col-md-12 col-lg-12\">\r\n                    <div class=\"card \">\r\n                \r\n                      <div class=\"card-header card-header-success card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                          <i class=\"material-icons\">build</i>\r\n                        </div>\r\n                \r\n                        <div class=\"col-sm-12\">\r\n                          <h3 class=\"card-title \">Repaired Today\r\n                              <button mat-button (click)=\"ExportRepairedToday()\" class=\"btn btn-success  btn-sm btn-just-icon float-right\">\r\n                                  <i class=\"material-icons\">cloud_download</i>\r\n                                </button> &nbsp;\r\n                          </h3>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12 col-lg-2 col-md-3 float-right searchfilter\">                         \r\n                          <mat-form-field>   \r\n                             <input matInput (keyup)=\"applyFilterToday($event.target.value)\"  id=\"TodayFilter\" placeholder=\"Search\">                    \r\n                          </mat-form-field>                \r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12 col-lg-2 col-md-3  float-right searchfilter\" >\r\n                          <mat-form-field>                            \r\n                              <input matInput readonly [matDatepicker]=\"dateRepairLocal\" placeholder=\"Select Date\" [(ngModel)]=\"dateRepair\" (ngModelChange)=\"GetRepairByDate()\"  name=\"dateRepair\">\r\n                         <mat-datepicker-toggle [for]=\"dateRepairLocal\" matSuffix></mat-datepicker-toggle>\r\n                        <mat-datepicker #dateRepairLocal > </mat-datepicker>   \r\n                        </mat-form-field>\r\n                        </div>\r\n                   \r\n                \r\n                \r\n                \r\n                \r\n                      </div>\r\n                \r\n                      <div class=\"card-body\">\r\n                          <div class=\"table-responsive\">\r\n                              <table mat-table [dataSource]=\"dataSourceRepairedToday\" class=\"table table-hover \" matSort>\r\n                    \r\n                                <!-- Position Column -->\r\n                                <ng-container matColumnDef=\"CustomerFullName\">\r\n                                  <th mat-header-cell *matHeaderCellDef  width=\"25%\" style=\"padding-left: 0px;\"  > Customer\r\n                                  </th>\r\n                                  <td mat-cell *matCellDef=\"let p\" style=\"padding-left: 0px;\"> {{p.CustomerFullName}} </td>\r\n                                </ng-container>\r\n                    \r\n                         \r\n                    \r\n                                <ng-container matColumnDef=\"Vehicle\">\r\n                                  <th mat-header-cell *matHeaderCellDef  width=\"25%\"> Vehicle </th>\r\n                                  <td mat-cell *matCellDef=\"let p\"> {{p.Vehicle}} </td>\r\n                                </ng-container>\r\n                    \r\n                    \r\n                       \r\n                    \r\n                                <ng-container matColumnDef=\"Reason\">\r\n                                  <th mat-header-cell *matHeaderCellDef width=\"25%\"> Reason </th>\r\n                                  <td mat-cell *matCellDef=\"let p\"> {{p.Reason}} </td>\r\n                                </ng-container>\r\n                    \r\n                                <ng-container matColumnDef=\"WorkPerformed\" width=\"25%\">\r\n                                  <th mat-header-cell *matHeaderCellDef  > Worked </th>\r\n                                  <td mat-cell *matCellDef=\"let p\"> {{p.WorkPerformed}} </td>\r\n                                </ng-container>\r\n                           \r\n                           \r\n                             \r\n                               \r\n                    \r\n                                <tr mat-header-row *matHeaderRowDef=\"displayedColumnsRepairedToday\"></tr>\r\n                                <tr mat-row *matRowDef=\"let row; columns: displayedColumnsRepairedToday;\"></tr>\r\n                              </table>\r\n                    \r\n                              <mat-paginator #paginatorRepairedToday [pageSizeOptions]=\"[3,10,20]\" showFirstLastButtons></mat-paginator>\r\n                            </div>\r\n                       \r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n   \r\n\r\n\r\n                  <div class=\" col-md-12 col-lg-12\">\r\n                    <div class=\"card \">\r\n                \r\n                      <div class=\"card-header card-header-warning card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                          <i class=\"material-icons\">event_note</i>\r\n                        </div>\r\n                \r\n                        <div class=\"col-sm-12\">\r\n                          <h3 class=\"card-title \">Appointments Tomorrow\r\n                              <button mat-button (click)=\"AppointmentTomorrow()\" class=\"btn btn-warning  btn-sm btn-just-icon float-right\">\r\n                                  <i class=\"material-icons\">cloud_download</i>\r\n                                </button> &nbsp;\r\n                          </h3>\r\n                        </div>\r\n        \r\n                        \r\n                        <div class=\"col-sm-12 col-lg-4 col-md-5 float-right searchfilter\">\r\n                          <mat-form-field>\r\n                \r\n                            <input matInput (keyup)=\"applyFilterTomorrow($event.target.value)\" id=\"TomorrowFilter\" placeholder=\"Search\">\r\n                \r\n                          </mat-form-field>\r\n                \r\n                        </div>\r\n                \r\n                \r\n                \r\n                \r\n                      </div>\r\n                \r\n                      <div class=\"card-body\">\r\n                          <div class=\"table-responsive\">\r\n                              <table mat-table [dataSource]=\"dataSourceAppointmentTomorrow\" class=\"table table-hover \">\r\n                    \r\n                                <!-- Position Column -->\r\n                                <ng-container matColumnDef=\"CustomerFullName\">\r\n                                  <th mat-header-cell *matHeaderCellDef width=\"15%\" style=\"padding-left: 0px;\"   > Customer\r\n                                  </th>\r\n                                  <td mat-cell *matCellDef=\"let p\" style=\"padding-left: 0px;\"> {{p.CustomerFullName}} </td>\r\n                                </ng-container>\r\n                    \r\n                         \r\n                                <ng-container matColumnDef=\"Phone\">\r\n                                        <th mat-header-cell *matHeaderCellDef width=\"15%\" > Phone </th>\r\n                                        <td mat-cell *matCellDef=\"let p\"> {{p.Phone}} </td>\r\n                                      </ng-container>\r\n                    \r\n\r\n                                      <ng-container matColumnDef=\"Time\">\r\n                                        <th mat-header-cell *matHeaderCellDef width=\"10%\" > Time </th>\r\n                                        <td mat-cell *matCellDef=\"let p\"> {{p.Time}} </td>\r\n                                      </ng-container>\r\n\r\n\r\n                                <ng-container matColumnDef=\"Vehicle\">\r\n                                  <th mat-header-cell *matHeaderCellDef  width=\"20%\"> Vehicle </th>\r\n                                  <td mat-cell *matCellDef=\"let p\"> {{p.Vehicle}} </td>\r\n                                </ng-container>\r\n                    \r\n                    \r\n                                <ng-container matColumnDef=\"Reason\">\r\n                                  <th mat-header-cell *matHeaderCellDef width=\"20%\"> Reason </th>\r\n                                  <td mat-cell *matCellDef=\"let p\"> {{p.Reason}} </td>\r\n                                </ng-container>\r\n              \r\n                          <ng-container matColumnDef=\"Note\">\r\n                            <th mat-header-cell *matHeaderCellDef width=\"20%\" > Note </th>\r\n                            <td mat-cell *matCellDef=\"let p\"> {{p.Note}} </td>\r\n                          </ng-container>\r\n                       \r\n                    \r\n                           \r\n                           \r\n                    \r\n                               \r\n                    \r\n                                <tr mat-header-row *matHeaderRowDef=\"displayedColumnsAppointmentTomorrow\"></tr>\r\n                                <tr mat-row *matRowDef=\"let row; columns: displayedColumnsAppointmentTomorrow;\"></tr>\r\n                              </table>\r\n                    \r\n                              <mat-paginator #paginatorAppointmentTomorrow [pageSizeOptions]=\"[3,10,20]\" showFirstLastButtons></mat-paginator>\r\n                            </div>\r\n                       \r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n\r\n        <div class=\" col-md-12 col-lg-12\">\r\n          <div class=\"card \">\r\n      \r\n            <div class=\"card-header card-header-danger card-header-icon\">\r\n              <div class=\"card-icon\">\r\n                <i class=\"material-icons\">build</i>\r\n              </div>\r\n      \r\n              <div class=\"col-sm-12\">\r\n                <h3 class=\"card-title \">Repaired Yesterday\r\n                    <button mat-button (click)=\"ExportRepairedYesterday()\" class=\"btn btn-danger  btn-sm btn-just-icon float-right\">\r\n                        <i class=\"material-icons\">cloud_download</i>\r\n                      </button> &nbsp;\r\n                </h3>\r\n              </div>\r\n              <div class=\"col-sm-12 col-lg-4 col-md-5 float-right searchfilter\">\r\n                <mat-form-field>\r\n      \r\n                  <input matInput (keyup)=\"applyFilterYesterday($event.target.value)\" id=\"YesterdayFilter\" placeholder=\"Search\">\r\n      \r\n                </mat-form-field>\r\n      \r\n              </div>\r\n      \r\n      \r\n      \r\n      \r\n            </div>\r\n      \r\n            <div class=\"card-body\">\r\n                <div class=\"table-responsive\">\r\n                    <table mat-table [dataSource]=\"dataSourceRepairedYesterday\" class=\"table table-hover \" >\r\n          \r\n                      <!-- Position Column -->\r\n                      <ng-container matColumnDef=\"CustomerFullName\">\r\n                        <th mat-header-cell *matHeaderCellDef width=\"25%\" style=\"padding-left: 0px;\" > Customer\r\n                        </th>\r\n                        <td mat-cell *matCellDef=\"let p\" style=\"padding-left: 0px;\"> {{p.CustomerFullName}} </td>\r\n                      </ng-container>\r\n          \r\n               \r\n          \r\n                      <ng-container matColumnDef=\"Vehicle\" >\r\n                        <th mat-header-cell *matHeaderCellDef  width=\"25%\"> Vehicle </th>\r\n                        <td mat-cell *matCellDef=\"let p\"> {{p.Vehicle}} </td>\r\n                      </ng-container>\r\n          \r\n          \r\n             \r\n          \r\n                      <ng-container matColumnDef=\"Reason\">\r\n                        <th mat-header-cell *matHeaderCellDef width=\"25%\" > Reason </th>\r\n                        <td mat-cell *matCellDef=\"let p\"> {{p.Reason}} </td>\r\n                      </ng-container>\r\n          \r\n                      <ng-container matColumnDef=\"WorkPerformed\">\r\n                        <th mat-header-cell *matHeaderCellDef  width=\"25%\"> Worked </th>\r\n                        <td mat-cell *matCellDef=\"let p\"> {{p.WorkPerformed}} </td>\r\n                      </ng-container>\r\n                 \r\n                 \r\n          \r\n                     \r\n          \r\n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumnsRepairedYesterday\"></tr>\r\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsRepairedYesterday;\"></tr>\r\n                    </table>\r\n          \r\n                    <mat-paginator #paginatorRepairedYesterday [pageSizeOptions]=\"[3,10,20]\" showFirstLastButtons></mat-paginator>\r\n                  </div>\r\n             \r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n   \r\n\r\n\r\n\r\n      \r\n      </div>"

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v9.4.3
* Released under the MIT License.
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Capitalize the first letter of a string
 * @param str
 */

var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Returns the array ob object values (Object.values isn't supported in IE11)
 * @param obj
 */

var objectValues = function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * Show a one-time console warning about deprecated params/methods
 */

var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
  warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isPromise = function isPromise(arg) {
  return arg && Promise.resolve(arg) === arg;
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var isJqueryElement = function isJqueryElement(elem) {
  return _typeof(elem) === 'object' && elem.jquery;
};

var isElement = function isElement(elem) {
  return elem instanceof Element || isJqueryElement(elem);
};

var argsToParams = function argsToParams(args) {
  var params = {};

  if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
    _extends(params, args[0]);
  } else {
    ['title', 'html', 'icon'].forEach(function (name, index) {
      var arg = args[index];

      if (typeof arg === 'string' || isElement(arg)) {
        params[name] = arg;
      } else if (arg !== undefined) {
        error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
      }
    });
  }

  return params;
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'scrollbar-measure']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var getContainer = function getContainer() {
  return document.body.querySelector(".".concat(swalClasses.container));
};
var elementBySelector = function elementBySelector(selectorString) {
  var container = getContainer();
  return container ? container.querySelector(selectorString) : null;
};

var elementByClass = function elementByClass(className) {
  return elementBySelector(".".concat(className));
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
};
var getIcon = function getIcon() {
  var visibleIcon = getIcons().filter(function (icon) {
    return isVisible(icon);
  });
  return visibleIcon.length ? visibleIcon[0] : null;
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getHtmlContainer = function getHtmlContainer() {
  return elementByClass(swalClasses['html-container']);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses['progress-steps']);
};
var getValidationMessage = function getValidationMessage() {
  return elementByClass(swalClasses['validation-message']);
};
var getConfirmButton = function getConfirmButton() {
  return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
};
var getCancelButton = function getCancelButton() {
  return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getHeader = function getHeader() {
  return elementByClass(swalClasses.header);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getTimerProgressBar = function getTimerProgressBar() {
  return elementByClass(swalClasses['timer-progress-bar']);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
}; // https://github.com/jkup/focusable/blob/master/index.js

var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  });
  var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  if (!className) {
    return false;
  }

  var classList = className.split(/\s+/);

  for (var i = 0; i < classList.length; i++) {
    if (!elem.classList.contains(classList[i])) {
      return false;
    }
  }

  return true;
};

var removeCustomClasses = function removeCustomClasses(elem, params) {
  toArray(elem.classList).forEach(function (className) {
    if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
      elem.classList.remove(className);
    }
  });
};

var applyCustomClass = function applyCustomClass(elem, params, className) {
  removeCustomClasses(elem, params);

  if (params.customClass && params.customClass[className]) {
    if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
      return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
    }

    addClass(elem, params.customClass[className]);
  }
};
function getInput(content, inputType) {
  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(content, swalClasses[inputType]);

    case 'checkbox':
      return content.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return content.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(content, swalClasses.input);
  }
}
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};
var toggleClass = function toggleClass(target, classList, condition) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        condition ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      condition ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};
var addClass = function addClass(target, classList) {
  toggleClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  toggleClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
  if (value || parseInt(value) === 0) {
    elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
  } else {
    elem.style.removeProperty(property);
  }
};
var show = function show(elem) {
  var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
  elem.style.opacity = '';
  elem.style.display = display;
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};
var toggle = function toggle(elem, condition, display) {
  condition ? show(elem, display) : hide(elem);
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
};
/* istanbul ignore next */

var isScrollable = function isScrollable(elem) {
  return !!(elem.scrollHeight > elem.clientHeight);
}; // borrowed from https://stackoverflow.com/a/46352119

var hasCssAnimation = function hasCssAnimation(elem) {
  var style = window.getComputedStyle(elem);
  var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
  var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
  return animDuration > 0 || transDuration > 0;
};
var contains = function contains(haystack, needle) {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle);
  }
};
var animateTimerProgressBar = function animateTimerProgressBar(timer) {
  var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var timerProgressBar = getTimerProgressBar();

  if (isVisible(timerProgressBar)) {
    if (reset) {
      timerProgressBar.style.transition = 'none';
      timerProgressBar.style.width = '100%';
    }

    setTimeout(function () {
      timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
      timerProgressBar.style.width = '0%';
    }, 10);
  }
};
var stopTimerProgressBar = function stopTimerProgressBar() {
  var timerProgressBar = getTimerProgressBar();
  var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  timerProgressBar.style.removeProperty('transition');
  timerProgressBar.style.width = '100%';
  var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
  timerProgressBar.style.removeProperty('transition');
  timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n </div>\n").replace(/(^|\n)\s*/g, '');

var resetOldContainer = function resetOldContainer() {
  var oldContainer = getContainer();

  if (!oldContainer) {
    return;
  }

  oldContainer.parentNode.removeChild(oldContainer);
  removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
};

var oldInputVal; // IE11 workaround, see #1109 for details

var resetValidationMessage = function resetValidationMessage(e) {
  if (Swal.isVisible() && oldInputVal !== e.target.value) {
    Swal.resetValidationMessage();
  }

  oldInputVal = e.target.value;
};

var addInputChangeListeners = function addInputChangeListeners() {
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea);
  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;

  range.oninput = function (e) {
    resetValidationMessage(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationMessage(e);
    range.nextSibling.value = range.value;
  };
};

var getTarget = function getTarget(target) {
  return typeof target === 'string' ? document.querySelector(target) : target;
};

var setupAccessibility = function setupAccessibility(params) {
  var popup = getPopup();
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }
};

var setupRTL = function setupRTL(targetElement) {
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
  }
};
/*
 * Add modal + backdrop to DOM
 */


var init = function init(params) {
  // Clean up the old popup container if it exists
  resetOldContainer();
  /* istanbul ignore if */

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = getTarget(params.target);
  targetElement.appendChild(container);
  setupAccessibility(params);
  setupRTL(targetElement);
  addInputChangeListeners();
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param); // JQuery element(s)
  } else if (_typeof(param) === 'object') {
    handleJqueryElem(target, param); // Plain string
  } else if (param) {
    target.innerHTML = param;
  }
};

var handleJqueryElem = function handleJqueryElem(target, elem) {
  target.innerHTML = '';

  if (0 in elem) {
    for (var i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true));
    }
  } else {
    target.appendChild(elem.cloneNode(true));
  }
};

var animationEndEvent = function () {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd oanimationend',
    animation: 'animationend'
  };

  for (var i in transEndEventNames) {
    if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

var measureScrollbar = function measureScrollbar() {
  var scrollDiv = document.createElement('div');
  scrollDiv.className = swalClasses['scrollbar-measure'];
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var renderActions = function renderActions(instance, params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } // Custom class


  applyCustomClass(actions, params, 'actions'); // Render confirm button

  renderButton(confirmButton, 'confirm', params); // render Cancel Button

  renderButton(cancelButton, 'cancel', params);

  if (params.buttonsStyling) {
    handleButtonsStyling(confirmButton, cancelButton, params);
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  if (params.reverseButtons) {
    confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
  }
};

function handleButtonsStyling(confirmButton, cancelButton, params) {
  addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
  }

  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  } // Loading state


  var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
  confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
  confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
}

function renderButton(button, buttonType, params) {
  toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
  button.innerHTML = params["".concat(buttonType, "ButtonText")]; // Set caption text

  button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
  // Add buttons custom classes

  button.className = swalClasses[buttonType];
  applyCustomClass(button, params, "".concat(buttonType, "Button"));
  addClass(button, params["".concat(buttonType, "ButtonClass")]);
}

function handleBackdropParam(container, backdrop) {
  if (typeof backdrop === 'string') {
    container.style.background = backdrop;
  } else if (!backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }
}

function handlePositionParam(container, position) {
  if (position in swalClasses) {
    addClass(container, swalClasses[position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }
}

function handleGrowParam(container, grow) {
  if (grow && typeof grow === 'string') {
    var growClass = "grow-".concat(grow);

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }
}

var renderContainer = function renderContainer(instance, params) {
  var container = getContainer();

  if (!container) {
    return;
  }

  handleBackdropParam(container, params.backdrop);

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  }

  handlePositionParam(container, params.position);
  handleGrowParam(container, params.grow); // Custom class

  applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

  var queueStep = document.body.getAttribute('data-swal2-queue-step');

  if (queueStep) {
    container.setAttribute('data-queue-step', queueStep);
    document.body.removeAttribute('data-swal2-queue-step');
  }
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};

var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
var renderInput = function renderInput(instance, params) {
  var content = getContent();
  var innerParams = privateProps.innerParams.get(instance);
  var rerender = !innerParams || params.input !== innerParams.input;
  inputTypes.forEach(function (inputType) {
    var inputClass = swalClasses[inputType];
    var inputContainer = getChildByClass(content, inputClass); // set attributes

    setAttributes(inputType, params.inputAttributes); // set class

    inputContainer.className = inputClass;

    if (rerender) {
      hide(inputContainer);
    }
  });

  if (params.input) {
    if (rerender) {
      showInput(params);
    } // set custom class


    setCustomClass(params);
  }
};

var showInput = function showInput(params) {
  if (!renderInputType[params.input]) {
    return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
  }

  var inputContainer = getInputContainer(params.input);
  var input = renderInputType[params.input](inputContainer, params);
  show(input); // input autofocus

  setTimeout(function () {
    focusInput(input);
  });
};

var removeAttributes = function removeAttributes(input) {
  for (var i = 0; i < input.attributes.length; i++) {
    var attrName = input.attributes[i].name;

    if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
      input.removeAttribute(attrName);
    }
  }
};

var setAttributes = function setAttributes(inputType, inputAttributes) {
  var input = getInput(getContent(), inputType);

  if (!input) {
    return;
  }

  removeAttributes(input);

  for (var attr in inputAttributes) {
    // Do not set a placeholder for <input type="range">
    // it'll crash Edge, #1298
    if (inputType === 'range' && attr === 'placeholder') {
      continue;
    }

    input.setAttribute(attr, inputAttributes[attr]);
  }
};

var setCustomClass = function setCustomClass(params) {
  var inputContainer = getInputContainer(params.input);

  if (params.customClass) {
    addClass(inputContainer, params.customClass.input);
  }
};

var setInputPlaceholder = function setInputPlaceholder(input, params) {
  if (!input.placeholder || params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder;
  }
};

var getInputContainer = function getInputContainer(inputType) {
  var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
  return getChildByClass(getContent(), inputClass);
};

var renderInputType = {};

renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
  if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
    input.value = params.inputValue;
  } else if (!isPromise(params.inputValue)) {
    warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
  }

  setInputPlaceholder(input, params);
  input.type = params.input;
  return input;
};

renderInputType.file = function (input, params) {
  setInputPlaceholder(input, params);
  return input;
};

renderInputType.range = function (range, params) {
  var rangeInput = range.querySelector('input');
  var rangeOutput = range.querySelector('output');
  rangeInput.value = params.inputValue;
  rangeInput.type = params.input;
  rangeOutput.value = params.inputValue;
  return range;
};

renderInputType.select = function (select, params) {
  select.innerHTML = '';

  if (params.inputPlaceholder) {
    var placeholder = document.createElement('option');
    placeholder.innerHTML = params.inputPlaceholder;
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);
  }

  return select;
};

renderInputType.radio = function (radio) {
  radio.innerHTML = '';
  return radio;
};

renderInputType.checkbox = function (checkboxContainer, params) {
  var checkbox = getInput(getContent(), 'checkbox');
  checkbox.value = 1;
  checkbox.id = swalClasses.checkbox;
  checkbox.checked = Boolean(params.inputValue);
  var label = checkboxContainer.querySelector('span');
  label.innerHTML = params.inputPlaceholder;
  return checkboxContainer;
};

renderInputType.textarea = function (textarea, params) {
  textarea.value = params.inputValue;
  setInputPlaceholder(textarea, params);

  if ('MutationObserver' in window) {
    // #1699
    var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
    var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

    var outputsize = function outputsize() {
      var contentWidth = textarea.offsetWidth + popupPadding;

      if (contentWidth > initialPopupWidth) {
        getPopup().style.width = "".concat(contentWidth, "px");
      } else {
        getPopup().style.width = null;
      }
    };

    new MutationObserver(outputsize).observe(textarea, {
      attributes: true,
      attributeFilter: ['style']
    });
  }

  return textarea;
};

var renderContent = function renderContent(instance, params) {
  var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content);
    show(content, 'block'); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content, 'block'); // No content
  } else {
    hide(content);
  }

  renderInput(instance, params); // Custom class

  applyCustomClass(getContent(), params, 'content');
};

var renderFooter = function renderFooter(instance, params) {
  var footer = getFooter();
  toggle(footer, params.footer);

  if (params.footer) {
    parseHtmlToContainer(params.footer, footer);
  } // Custom class


  applyCustomClass(footer, params, 'footer');
};

var renderCloseButton = function renderCloseButton(instance, params) {
  var closeButton = getCloseButton();
  closeButton.innerHTML = params.closeButtonHtml; // Custom class

  applyCustomClass(closeButton, params, 'closeButton');
  toggle(closeButton, params.showCloseButton);
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
};

var renderIcon = function renderIcon(instance, params) {
  var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

  if (innerParams && params.icon === innerParams.icon && getIcon()) {
    applyCustomClass(getIcon(), params, 'icon');
    return;
  }

  hideAllIcons();

  if (!params.icon) {
    return;
  }

  if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
    var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
    show(icon); // Custom or default content

    setContent(icon, params);
    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon'); // Animate icon

    addClass(icon, params.showClass.icon);
  } else {
    error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
  }
};

var hideAllIcons = function hideAllIcons() {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }
}; // Adjust success icon background color to match the popup background color


var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
  var popup = getPopup();
  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }
};

var setContent = function setContent(icon, params) {
  icon.innerHTML = '';

  if (params.iconHtml) {
    icon.innerHTML = iconContent(params.iconHtml);
  } else if (params.icon === 'success') {
    icon.innerHTML = "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ";
  } else if (params.icon === 'error') {
    icon.innerHTML = "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ";
  } else {
    var defaultIconHtml = {
      question: '?',
      warning: '!',
      info: 'i'
    };
    icon.innerHTML = iconContent(defaultIconHtml[params.icon]);
  }
};

var iconContent = function iconContent(content) {
  return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
};

var renderImage = function renderImage(instance, params) {
  var image = getImage();

  if (!params.imageUrl) {
    return hide(image);
  }

  show(image); // Src, alt

  image.setAttribute('src', params.imageUrl);
  image.setAttribute('alt', params.imageAlt); // Width, height

  applyNumericalStyle(image, 'width', params.imageWidth);
  applyNumericalStyle(image, 'height', params.imageHeight); // Class

  image.className = swalClasses.image;
  applyCustomClass(image, params, 'image');
};

var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var Swal = this;
  currentSteps = steps;

  var resetAndResolve = function resetAndResolve(resolve, value) {
    currentSteps = [];
    resolve(value);
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        Swal.fire(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetAndResolve(resolve, {
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetAndResolve(resolve, {
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return getContainer().getAttribute('data-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

var createStepElement = function createStepElement(step) {
  var stepEl = document.createElement('li');
  addClass(stepEl, swalClasses['progress-step']);
  stepEl.innerHTML = step;
  return stepEl;
};

var createLineElement = function createLineElement(params) {
  var lineEl = document.createElement('li');
  addClass(lineEl, swalClasses['progress-step-line']);

  if (params.progressStepsDistance) {
    lineEl.style.width = params.progressStepsDistance;
  }

  return lineEl;
};

var renderProgressSteps = function renderProgressSteps(instance, params) {
  var progressStepsContainer = getProgressSteps();

  if (!params.progressSteps || params.progressSteps.length === 0) {
    return hide(progressStepsContainer);
  }

  show(progressStepsContainer);
  progressStepsContainer.innerHTML = '';
  var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

  if (currentProgressStep >= params.progressSteps.length) {
    warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
  }

  params.progressSteps.forEach(function (step, index) {
    var stepEl = createStepElement(step);
    progressStepsContainer.appendChild(stepEl);

    if (index === currentProgressStep) {
      addClass(stepEl, swalClasses['active-progress-step']);
    }

    if (index !== params.progressSteps.length - 1) {
      var lineEl = createLineElement(step);
      progressStepsContainer.appendChild(lineEl);
    }
  });
};

var renderTitle = function renderTitle(instance, params) {
  var title = getTitle();
  toggle(title, params.title || params.titleText);

  if (params.title) {
    parseHtmlToContainer(params.title, title);
  }

  if (params.titleText) {
    title.innerText = params.titleText;
  } // Custom class


  applyCustomClass(title, params, 'title');
};

var renderHeader = function renderHeader(instance, params) {
  var header = getHeader(); // Custom class

  applyCustomClass(header, params, 'header'); // Progress steps

  renderProgressSteps(instance, params); // Icon

  renderIcon(instance, params); // Image

  renderImage(instance, params); // Title

  renderTitle(instance, params); // Close button

  renderCloseButton(instance, params);
};

var renderPopup = function renderPopup(instance, params) {
  var popup = getPopup(); // Width

  applyNumericalStyle(popup, 'width', params.width); // Padding

  applyNumericalStyle(popup, 'padding', params.padding); // Background

  if (params.background) {
    popup.style.background = params.background;
  } // Default Class


  popup.className = swalClasses.popup;

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom class


  applyCustomClass(popup, params, 'popup');

  if (typeof params.customClass === 'string') {
    addClass(popup, params.customClass);
  } // Add showClass when updating Swal.update({})


  if (isVisible(popup)) {
    addClass(popup, params.showClass.popup);
  }
};

var render = function render(instance, params) {
  renderPopup(instance, params);
  renderContainer(instance, params);
  renderHeader(instance, params);
  renderContent(instance, params);
  renderActions(instance, params);
  renderFooter(instance, params);

  if (typeof params.onRender === 'function') {
    params.onRender(getPopup());
  }
};

/*
 * Global function to determine if SweetAlert2 popup is shown
 */

var isVisible$1 = function isVisible$$1() {
  return isVisible(getPopup());
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton() && getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton() && getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin(mixinParams) {
  var MixinSwal =
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this);

  return MixinSwal;
}

/**
 * Show spinner instead of Confirm button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal.fire();
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  show(actions);
  show(confirmButton, 'inline-block');
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var focusPreviousActiveElement = function focusPreviousActiveElement() {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    globalState.previousActiveElement.focus();
    globalState.previousActiveElement = null;
  } else if (document.body) {
    document.body.focus();
  }
}; // Restore previous active (focused) element


var restoreActiveElement = function restoreActiveElement() {
  return new Promise(function (resolve) {
    var x = window.scrollX;
    var y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(function () {
      focusPreviousActiveElement();
      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  });
};

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};
/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var stopTimer = function stopTimer() {
  if (globalState.timeout) {
    stopTimerProgressBar();
    return globalState.timeout.stop();
  }
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var resumeTimer = function resumeTimer() {
  if (globalState.timeout) {
    var remaining = globalState.timeout.start();
    animateTimerProgressBar(remaining);
    return remaining;
  }
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var toggleTimer = function toggleTimer() {
  var timer = globalState.timeout;
  return timer && (timer.running ? stopTimer() : resumeTimer());
};
/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */

var increaseTimer = function increaseTimer(n) {
  if (globalState.timeout) {
    var remaining = globalState.timeout.increase(n);
    animateTimerProgressBar(remaining, true);
    return remaining;
  }
};
/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */

var isTimerRunning = function isTimerRunning() {
  return globalState.timeout && globalState.timeout.isRunning();
};

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  icon: undefined,
  iconHtml: undefined,
  toast: false,
  animation: true,
  showClass: {
    popup: 'swal2-show',
    backdrop: 'swal2-backdrop-show',
    icon: 'swal2-icon-show'
  },
  hideClass: {
    popup: 'swal2-hide',
    backdrop: 'swal2-backdrop-hide',
    icon: 'swal2-icon-hide'
  },
  customClass: undefined,
  target: 'body',
  backdrop: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: undefined,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: undefined,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: undefined,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonHtml: '&times;',
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: undefined,
  imageWidth: undefined,
  imageHeight: undefined,
  imageAlt: '',
  timer: undefined,
  timerProgressBar: false,
  width: undefined,
  padding: undefined,
  background: undefined,
  input: undefined,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputAttributes: {},
  inputValidator: undefined,
  validationMessage: undefined,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: undefined,
  progressStepsDistance: undefined,
  onBeforeOpen: undefined,
  onOpen: undefined,
  onRender: undefined,
  onClose: undefined,
  onAfterClose: undefined,
  scrollbarPadding: true
};
var updatableParams = ['title', 'titleText', 'text', 'html', 'icon', 'customClass', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeight', 'imageAlt', 'progressSteps', 'currentProgressStep'];
var deprecatedParams = {
  animation: 'showClass" and "hideClass'
};
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
};
/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */

var isUpdatableParameter = function isUpdatableParameter(paramName) {
  return updatableParams.indexOf(paramName) !== -1;
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams[paramName];
};

var checkIfParamIsValid = function checkIfParamIsValid(param) {
  if (!isValidParameter(param)) {
    warn("Unknown parameter \"".concat(param, "\""));
  }
};

var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
  if (toastIncompatibleParams.indexOf(param) !== -1) {
    warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
  }
};

var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
  if (isDeprecatedParameter(param)) {
    warnAboutDepreation(param, isDeprecatedParameter(param));
  }
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */


var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    checkIfParamIsValid(param);

    if (params.toast) {
      checkIfToastParamIsValid(param);
    }

    checkIfParamIsDeprecated(param);
  }
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isUpdatableParameter: isUpdatableParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getHtmlContainer: getHtmlContainer,
	getImage: getImage,
	getIcon: getIcon,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getHeader: getHeader,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	getValidationMessage: getValidationMessage,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft,
	stopTimer: stopTimer,
	resumeTimer: resumeTimer,
	toggleTimer: toggleTimer,
	increaseTimer: increaseTimer,
	isTimerRunning: isTimerRunning
});

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  // do nothing if popup is closed
  var innerParams = privateProps.innerParams.get(this);

  if (!innerParams) {
    return;
  }

  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput$1(instance) {
  var innerParams = privateProps.innerParams.get(instance || this);
  var domCache = privateProps.domCache.get(instance || this);

  if (!domCache) {
    return null;
  }

  return getInput(domCache.content, innerParams.input);
}

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore next */

var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = "".concat(offset * -1, "px");
    addClass(document.body, swalClasses.iosfix);
    lockBodyScroll();
  }
};
/* istanbul ignore next */

var lockBodyScroll = function lockBodyScroll() {
  // #1246
  var container = getContainer();
  var preventTouchMove;

  container.ontouchstart = function (e) {
    preventTouchMove = e.target === container || !isScrollable(container) && e.target.tagName !== 'INPUT' // #1603
    ;
  };

  container.ontouchmove = function (e) {
    if (preventTouchMove) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
};
/* istanbul ignore next */


var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var isIE11 = function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}; // Fix IE11 centering sweetalert2/issues/933

/* istanbul ignore next */


var fixVerticalPositionIE = function fixVerticalPositionIE() {
  var container = getContainer();
  var popup = getPopup();
  container.style.removeProperty('align-items');

  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start';
  }
};
/* istanbul ignore next */


var IEfix = function IEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE();
    window.addEventListener('resize', fixVerticalPositionIE);
  }
};
/* istanbul ignore next */

var undoIEfix = function undoIEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE);
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || contains(el, getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateMethods = {
  swalPromiseResolve: new WeakMap()
};

/*
 * Instance method to close sweetAlert
 */

function removePopupAndResetState(instance, container, isToast, onAfterClose) {
  if (isToast) {
    triggerOnAfterCloseAndDispose(instance, onAfterClose);
  } else {
    restoreActiveElement().then(function () {
      return triggerOnAfterCloseAndDispose(instance, onAfterClose);
    });
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }

  if (container.parentNode) {
    container.parentNode.removeChild(container);
  }

  if (isModal()) {
    undoScrollbar();
    undoIOSfix();
    undoIEfix();
    unsetAriaHidden();
  }

  removeBodyClasses();
}

function removeBodyClasses() {
  removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
}

function disposeSwal(instance) {
  // Unset this.params so GC will dispose it (#1569)
  delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

  delete globalState.keydownHandler;
  delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

  unsetWeakMaps(privateProps);
  unsetWeakMaps(privateMethods);
}

function close(resolveValue) {
  var popup = getPopup();

  if (!popup) {
    return;
  }

  var innerParams = privateProps.innerParams.get(this);

  if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
    return;
  }

  var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
  removeClass(popup, innerParams.showClass.popup);
  addClass(popup, innerParams.hideClass.popup);
  var backdrop = getContainer();
  removeClass(backdrop, innerParams.showClass.backdrop);
  addClass(backdrop, innerParams.hideClass.backdrop);
  handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

  swalPromiseResolve(resolveValue || {});
}

var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
  var container = getContainer(); // If animation is supported, animate

  var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
  var onClose = innerParams.onClose,
      onAfterClose = innerParams.onAfterClose;

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  if (animationIsSupported) {
    animatePopup(instance, popup, container, onAfterClose);
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState(instance, container, isToast(), onAfterClose);
  }
};

var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
  globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
  popup.addEventListener(animationEndEvent, function (e) {
    if (e.target === popup) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
  });
};

var unsetWeakMaps = function unsetWeakMaps(obj) {
  for (var i in obj) {
    obj[i] = new WeakMap();
  }
};

var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
  setTimeout(function () {
    if (onAfterClose !== null && typeof onAfterClose === 'function') {
      onAfterClose();
    }

    if (!getPopup()) {
      disposeSwal(instance);
    }
  });
};

function setButtonsDisabled(instance, buttons, disabled) {
  var domCache = privateProps.domCache.get(instance);
  buttons.forEach(function (button) {
    domCache[button].disabled = disabled;
  });
}

function setInputDisabled(input, disabled) {
  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled;
    }
  } else {
    input.disabled = disabled;
  }
}

function enableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
}
function disableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
}
function enableInput() {
  return setInputDisabled(this.getInput(), false);
}
function disableInput() {
  return setInputDisabled(this.getInput(), true);
}

function showValidationMessage(error) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationMessage.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationMessage);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation message

function resetValidationMessage$1() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

function getProgressSteps$1() {
  var domCache = privateProps.domCache.get(this);
  return domCache.progressSteps;
}

var Timer =
/*#__PURE__*/
function () {
  function Timer(callback, delay) {
    _classCallCheck(this, Timer);

    this.callback = callback;
    this.remaining = delay;
    this.running = false;
    this.start();
  }

  _createClass(Timer, [{
    key: "start",
    value: function start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date() - this.started;
      }

      return this.remaining;
    }
  }, {
    key: "increase",
    value: function increase(n) {
      var running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "getTimerLeft",
    value: function getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.running;
    }
  }]);

  return Timer;
}();

var defaultInputValidators = {
  email: function email(string, validationMessage) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
  },
  url: function url(string, validationMessage) {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
  }
};

function setDefaultInputValidators(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = defaultInputValidators[key];
      }
    });
  }
}

function validateCustomTargetElement(params) {
  // Determine if the custom target element is valid
  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }
}
/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */


function setParameters(params) {
  setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  } // params.animation will be actually used in renderPopup.js
  // but in case when params.animation is a function, we need to call that function
  // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
  // inside the params.animation function


  params.animation = callIfFunction(params.animation);
  validateCustomTargetElement(params); // Replace newlines with <br> in title

  if (typeof params.title === 'string') {
    params.title = params.title.split('\n').join('<br />');
  }

  init(params);
}

function swalOpenAnimationFinished(popup, container) {
  popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
  container.style.overflowY = 'auto';
}
/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */


var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  addClasses(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

  setScrollingVisibility(container, popup);

  if (isModal()) {
    fixScrollContainer(container, params.scrollbarPadding);
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (typeof params.onOpen === 'function') {
    setTimeout(function () {
      return params.onOpen(popup);
    });
  }
};

var setScrollingVisibility = function setScrollingVisibility(container, popup) {
  if (animationEndEvent && hasCssAnimation(popup)) {
    container.style.overflowY = 'hidden';
    popup.addEventListener(animationEndEvent, swalOpenAnimationFinished.bind(null, popup, container));
  } else {
    container.style.overflowY = 'auto';
  }
};

var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding) {
  iOSfix();
  IEfix();
  setAriaHidden();

  if (scrollbarPadding) {
    fixScrollbar();
  } // sweetalert2/issues/1247


  setTimeout(function () {
    container.scrollTop = 0;
  });
};

var addClasses = function addClasses(container, popup, params) {
  addClass(container, params.showClass.backdrop);
  show(popup); // Animate popup right after showing it

  addClass(popup, params.showClass.popup);
  addClass([document.documentElement, document.body], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }
};

var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
  if (params.input === 'select' || params.input === 'radio') {
    handleInputOptions(instance, params);
  } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && isPromise(params.inputValue)) {
    handleInputValue(instance, params);
  }
};
var getInputValue = function getInputValue(instance, innerParams) {
  var input = instance.getInput();

  if (!input) {
    return null;
  }

  switch (innerParams.input) {
    case 'checkbox':
      return getCheckboxValue(input);

    case 'radio':
      return getRadioValue(input);

    case 'file':
      return getFileValue(input);

    default:
      return innerParams.inputAutoTrim ? input.value.trim() : input.value;
  }
};

var getCheckboxValue = function getCheckboxValue(input) {
  return input.checked ? 1 : 0;
};

var getRadioValue = function getRadioValue(input) {
  return input.checked ? input.value : null;
};

var getFileValue = function getFileValue(input) {
  return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
};

var handleInputOptions = function handleInputOptions(instance, params) {
  var content = getContent();

  var processInputOptions = function processInputOptions(inputOptions) {
    return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
  };

  if (isPromise(params.inputOptions)) {
    showLoading();
    params.inputOptions.then(function (inputOptions) {
      instance.hideLoading();
      processInputOptions(inputOptions);
    });
  } else if (_typeof(params.inputOptions) === 'object') {
    processInputOptions(params.inputOptions);
  } else {
    error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
  }
};

var handleInputValue = function handleInputValue(instance, params) {
  var input = instance.getInput();
  hide(input);
  params.inputValue.then(function (inputValue) {
    input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
    show(input);
    input.focus();
    instance.hideLoading();
  })["catch"](function (err) {
    error("Error in inputValue promise: ".concat(err));
    input.value = '';
    show(input);
    input.focus();
    instance.hideLoading();
  });
};

var populateInputOptions = {
  select: function select(content, inputOptions, params) {
    var select = getChildByClass(content, swalClasses.select);
    inputOptions.forEach(function (inputOption) {
      var optionValue = inputOption[0];
      var optionLabel = inputOption[1];
      var option = document.createElement('option');
      option.value = optionValue;
      option.innerHTML = optionLabel;

      if (params.inputValue.toString() === optionValue.toString()) {
        option.selected = true;
      }

      select.appendChild(option);
    });
    select.focus();
  },
  radio: function radio(content, inputOptions, params) {
    var radio = getChildByClass(content, swalClasses.radio);
    inputOptions.forEach(function (inputOption) {
      var radioValue = inputOption[0];
      var radioLabel = inputOption[1];
      var radioInput = document.createElement('input');
      var radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;

      if (params.inputValue.toString() === radioValue.toString()) {
        radioInput.checked = true;
      }

      var label = document.createElement('span');
      label.innerHTML = radioLabel;
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    var radios = radio.querySelectorAll('input');

    if (radios.length) {
      radios[0].focus();
    }
  }
};
/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};

var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
  instance.disableButtons();

  if (innerParams.input) {
    handleConfirmWithInput(instance, innerParams);
  } else {
    confirm(instance, innerParams, true);
  }
};
var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
  instance.disableButtons();
  dismissWith(DismissReason.cancel);
};

var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
  var inputValue = getInputValue(instance, innerParams);

  if (innerParams.inputValidator) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return innerParams.inputValidator(inputValue, innerParams.validationMessage);
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  } else if (!instance.getInput().checkValidity()) {
    instance.enableButtons();
    instance.showValidationMessage(innerParams.validationMessage);
  } else {
    confirm(instance, innerParams, inputValue);
  }
};

var succeedWith = function succeedWith(instance, value) {
  instance.closePopup({
    value: value
  });
};

var confirm = function confirm(instance, innerParams, value) {
  if (innerParams.showLoaderOnConfirm) {
    showLoading(); // TODO: make showLoading an *instance* method
  }

  if (innerParams.preConfirm) {
    instance.resetValidationMessage();
    var preConfirmPromise = Promise.resolve().then(function () {
      return innerParams.preConfirm(value, innerParams.validationMessage);
    });
    preConfirmPromise.then(function (preConfirmValue) {
      if (isVisible(getValidationMessage()) || preConfirmValue === false) {
        instance.hideLoading();
      } else {
        succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
      }
    });
  } else {
    succeedWith(instance, value);
  }
};

var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
  if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }

  if (!innerParams.toast) {
    globalState.keydownHandler = function (e) {
      return keydownHandler(instance, e, innerParams, dismissWith);
    };

    globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
    globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
    globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = true;
  }
}; // Focus handling

var setFocus = function setFocus(innerParams, index, increment) {
  var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

  for (var i = 0; i < focusableElements.length; i++) {
    index = index + increment; // rollover to first item

    if (index === focusableElements.length) {
      index = 0; // go to last item
    } else if (index === -1) {
      index = focusableElements.length - 1;
    }

    return focusableElements[index].focus();
  } // no visible focusable elements, focus the popup


  getPopup().focus();
};
var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
];
var escKeys = ['Escape', 'Esc' // IE11
];

var keydownHandler = function keydownHandler(instance, e, innerParams, dismissWith) {
  if (innerParams.stopKeydownPropagation) {
    e.stopPropagation();
  } // ENTER


  if (e.key === 'Enter') {
    handleEnter(instance, e, innerParams); // TAB
  } else if (e.key === 'Tab') {
    handleTab(e, innerParams); // ARROWS - switch focus between buttons
  } else if (arrowKeys.indexOf(e.key) !== -1) {
    handleArrows(); // ESC
  } else if (escKeys.indexOf(e.key) !== -1) {
    handleEsc(e, innerParams, dismissWith);
  }
};

var handleEnter = function handleEnter(instance, e, innerParams) {
  // #720 #721
  if (e.isComposing) {
    return;
  }

  if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
    if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
      return; // do not submit
    }

    clickConfirm();
    e.preventDefault();
  }
};

var handleTab = function handleTab(e, innerParams) {
  var targetElement = e.target;
  var focusableElements = getFocusableElements();
  var btnIndex = -1;

  for (var i = 0; i < focusableElements.length; i++) {
    if (targetElement === focusableElements[i]) {
      btnIndex = i;
      break;
    }
  }

  if (!e.shiftKey) {
    // Cycle to the next button
    setFocus(innerParams, btnIndex, 1);
  } else {
    // Cycle to the prev button
    setFocus(innerParams, btnIndex, -1);
  }

  e.stopPropagation();
  e.preventDefault();
};

var handleArrows = function handleArrows() {
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

  if (document.activeElement === confirmButton && isVisible(cancelButton)) {
    cancelButton.focus(); // and vice versa
  } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
    confirmButton.focus();
  }
};

var handleEsc = function handleEsc(e, innerParams, dismissWith) {
  if (callIfFunction(innerParams.allowEscapeKey)) {
    e.preventDefault();
    dismissWith(DismissReason.esc);
  }
};

var handlePopupClick = function handlePopupClick(domCache, innerParams, dismissWith) {
  if (innerParams.toast) {
    handleToastClick(domCache, innerParams, dismissWith);
  } else {
    // Ignore click events that had mousedown on the popup but mouseup on the container
    // This can happen when the user drags a slider
    handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

    handleContainerMousedown(domCache);
    handleModalClick(domCache, innerParams, dismissWith);
  }
};

var handleToastClick = function handleToastClick(domCache, innerParams, dismissWith) {
  // Closing toast by internal click
  domCache.popup.onclick = function () {
    if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
      return;
    }

    dismissWith(DismissReason.close);
  };
};

var ignoreOutsideClick = false;

var handleModalMousedown = function handleModalMousedown(domCache) {
  domCache.popup.onmousedown = function () {
    domCache.container.onmouseup = function (e) {
      domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
      // have any other direct children aside of the popup

      if (e.target === domCache.container) {
        ignoreOutsideClick = true;
      }
    };
  };
};

var handleContainerMousedown = function handleContainerMousedown(domCache) {
  domCache.container.onmousedown = function () {
    domCache.popup.onmouseup = function (e) {
      domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

      if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
        ignoreOutsideClick = true;
      }
    };
  };
};

var handleModalClick = function handleModalClick(domCache, innerParams, dismissWith) {
  domCache.container.onclick = function (e) {
    if (ignoreOutsideClick) {
      ignoreOutsideClick = false;
      return;
    }

    if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
      dismissWith(DismissReason.backdrop);
    }
  };
};

function _main(userParams) {
  showWarningsForParams(userParams); // Check if there is another Swal closing

  if (getPopup() && globalState.swalCloseEventFinishedCallback) {
    globalState.swalCloseEventFinishedCallback();
    delete globalState.swalCloseEventFinishedCallback;
  } // Check if there is a swal disposal defer timer


  if (globalState.deferDisposalTimer) {
    clearTimeout(globalState.deferDisposalTimer);
    delete globalState.deferDisposalTimer;
  }

  var innerParams = prepareParams(userParams);
  setParameters(innerParams);
  Object.freeze(innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = populateDomCache(this);
  render(this, innerParams);
  privateProps.innerParams.set(this, innerParams);
  return swalPromise(this, domCache, innerParams);
}

var prepareParams = function prepareParams(userParams) {
  var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

  var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

  var params = _extends({}, defaultParams, userParams);

  params.showClass = showClass;
  params.hideClass = hideClass; // @deprecated

  if (userParams.animation === false) {
    params.showClass = {
      popup: '',
      backdrop: 'swal2-backdrop-show swal2-noanimation'
    };
    params.hideClass = {};
  }

  return params;
};

var swalPromise = function swalPromise(instance, domCache, innerParams) {
  return new Promise(function (resolve) {
    // functions to handle all closings/dismissals
    var dismissWith = function dismissWith(dismiss) {
      instance.closePopup({
        dismiss: dismiss
      });
    };

    privateMethods.swalPromiseResolve.set(instance, resolve);
    setupTimer(globalState, innerParams, dismissWith);

    domCache.confirmButton.onclick = function () {
      return handleConfirmButtonClick(instance, innerParams);
    };

    domCache.cancelButton.onclick = function () {
      return handleCancelButtonClick(instance, dismissWith);
    };

    domCache.closeButton.onclick = function () {
      return dismissWith(DismissReason.close);
    };

    handlePopupClick(domCache, innerParams, dismissWith);
    addKeydownHandler(instance, globalState, innerParams, dismissWith);

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    }

    handleInputOptionsAndValue(instance, innerParams);
    openPopup(innerParams);
    initFocus(domCache, innerParams); // Scroll container to top on open (#1247)

    domCache.container.scrollTop = 0;
  });
};

var populateDomCache = function populateDomCache(instance) {
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(instance, domCache);
  return domCache;
};

var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
  var timerProgressBar = getTimerProgressBar();
  hide(timerProgressBar);

  if (innerParams.timer) {
    globalState$$1.timeout = new Timer(function () {
      dismissWith('timer');
      delete globalState$$1.timeout;
    }, innerParams.timer);

    if (innerParams.timerProgressBar) {
      show(timerProgressBar);
      setTimeout(function () {
        animateTimerProgressBar(innerParams.timer);
      });
    }
  }
};

var initFocus = function initFocus(domCache, innerParams) {
  if (innerParams.toast) {
    return;
  }

  if (!callIfFunction(innerParams.allowEnterKey)) {
    return blurActiveElement();
  }

  if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
    return domCache.cancelButton.focus();
  }

  if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
    return domCache.confirmButton.focus();
  }

  setFocus(innerParams, -1, 1);
};

var blurActiveElement = function blurActiveElement() {
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }
};

/**
 * Updates popup parameters.
 */

function update(params) {
  var popup = getPopup();
  var innerParams = privateProps.innerParams.get(this);

  if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
    return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
  }

  var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

  Object.keys(params).forEach(function (param) {
    if (Swal.isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param];
    } else {
      warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
    }
  });

  var updatedParams = _extends({}, innerParams, validUpdatableParams);

  render(this, updatedParams);
  privateProps.innerParams.set(this, updatedParams);
  Object.defineProperties(this, {
    params: {
      value: _extends({}, this.params, params),
      writable: false,
      enumerable: true
    }
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput$1,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationMessage: showValidationMessage,
	resetValidationMessage: resetValidationMessage$1,
	getProgressSteps: getProgressSteps$1,
	_main: _main,
	update: update
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise

  /* istanbul ignore if */


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  currentInstance = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true,
      configurable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled);
};

SweetAlert.prototype["finally"] = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise["finally"](onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
SweetAlert.version = '9.4.3';

var Swal = SweetAlert;
Swal["default"] = Swal;

return Swal;

})));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.swal2-popup.swal2-toast .swal2-title{-webkit-box-flex:1;flex-grow:1;-webkit-box-pack:start;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{-webkit-box-pack:start;justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:-webkit-box;display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow-x:hidden;-webkit-transition:background-color .1s;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-center{-webkit-box-align:center;align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-self:stretch;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-column{-webkit-box-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{-webkit-box-align:center;align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:-webkit-box;display:flex;z-index:1;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.1)),to(rgba(0,0,0,.1)));background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.2)),to(rgba(0,0,0,.2)));background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{-webkit-box-pack:center;justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar{position:absolute;bottom:0;left:0;width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;-webkit-box-pack:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;-webkit-transition:color .1s ease-out;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;-webkit-box-pack:center;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;-webkit-transition:border-color .3s,box-shadow .3s;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;-webkit-box-pack:center;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;-webkit-box-flex:1;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{-webkit-box-align:center;align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{-webkit-transition:none;transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:stretch;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{-webkit-box-flex:1;flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{-webkit-box-pack:center;justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ }),

/***/ "./src/app/Controllers/customer/customer-list/customer-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Controllers/customer/customer-list/customer-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_Services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Services/customer.service */ "./src/app/Services/customer.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/Services/notification.service */ "./src/app/Services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_Services_csvservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/Services/csvservice.service */ "./src/app/Services/csvservice.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(service, _router, csvService, echo) {
        this.service = service;
        this._router = _router;
        this.csvService = csvService;
        this.echo = echo;
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.ResetCustomer();
                        _a = this;
                        return [4 /*yield*/, this.service.GetAllCustomers()];
                    case 1:
                        _a.CustomerList = _b.sent();
                        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.CustomerList);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        this.displayedColumns = ['FirstName', 'MiddleName', 'LastName', 'Phone', 'Street', 'City', 'State', 'Actions'];
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CustomerListComponent.prototype.Edit = function (aCustomer) {
        this.service.SelectctedCustomer = aCustomer;
        this._router.navigate(['customer/setting']);
    };
    CustomerListComponent.prototype.ExportCSV = function () {
        var date = new Date();
        var reportHeader = ['ID', 'First Name', 'Middle Name', 'Last Name', 'Phone', 'Street', 'City', 'State'];
        this.csvService.Export(this.CustomerList, reportHeader, 'Customer List | ' + date.toString());
    };
    CustomerListComponent.prototype.ResetCustomer = function () {
        this.service.SelectctedCustomer.ID = -1;
        this.service.SelectctedCustomer.FirstName = '';
        this.service.SelectctedCustomer.MiddleName = '';
        this.service.SelectctedCustomer.LastName = '';
        this.service.SelectctedCustomer.Email = '';
        this.service.SelectctedCustomer.Phone = '';
        this.service.SelectctedCustomer.City = '';
        this.service.SelectctedCustomer.Street = '';
        this.service.SelectctedCustomer.State = '';
    };
    CustomerListComponent.prototype.DeleteCustomer = function (CustomerID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#00bcd4',
                    cancelButtonColor: '#d33',
                    focusConfirm: false,
                    confirmButtonText: 'Yes, delete it!'
                }).then(function (result) {
                    if (result.value) {
                        _this.DeleteCustomerInner(CustomerID);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    CustomerListComponent.prototype.DeleteCustomerInner = function (CustomerID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.service.DeleteCustomer(CustomerID).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this.echo.Success(res);
                                _a = this;
                                return [4 /*yield*/, this.service.GetAllCustomers()];
                            case 1:
                                _a.CustomerList = _b.sent();
                                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.CustomerList);
                                this.dataSource.paginator = this.paginator;
                                this.dataSource.sort = this.sort;
                                this.displayedColumns = ['FirstName', 'MiddleName', 'LastName', 'Phone', 'Street', 'City', 'State', 'Actions'];
                                return [2 /*return*/];
                        }
                    });
                }); }, function (err) {
                    console.log(err);
                    var e = err;
                    _this.echo.Error(e.error.Value);
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CustomerListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], CustomerListComponent.prototype, "sort", void 0);
    CustomerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! raw-loader!./customer-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/Controllers/customer/customer-list/customer-list.component.html")
        }),
        __metadata("design:paramtypes", [app_Services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_Services_csvservice_service__WEBPACK_IMPORTED_MODULE_5__["CSVServiceService"], app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/Controllers/customer/customer-setting/customer-setting.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Controllers/customer/customer-setting/customer-setting.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomerSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSettingComponent", function() { return CustomerSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_Services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Services/customer.service */ "./src/app/Services/customer.service.ts");
/* harmony import */ var app_Services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/Services/notification.service */ "./src/app/Services/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_Services_csvservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/Services/csvservice.service */ "./src/app/Services/csvservice.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_Services_setting_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Services/setting-service.service */ "./src/app/Services/setting-service.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var CustomerSettingComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function CustomerSettingComponent(customerService, echo, csvService, settingService) {
        this.customerService = customerService;
        this.echo = echo;
        this.csvService = csvService;
        this.settingService = settingService;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.myControlModel = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.aCustomer = {};
        this.aVehicle = {};
        // tslint:disable-next-line: max-line-length
        this.Makes = {}; // =['Audi','Toyota', 'BMW','Audi','Toyota', 'BMW','Audi','Toyota', 'BMW','Audi','Toyota', 'BMW','Audi','Toyota', 'BMW','Audi','Toyota', 'BMW'];
        this.Models = {};
    }
    CustomerSettingComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        //  this.aCustomer.ID = -1;
                        _a = this;
                        return [4 /*yield*/, this.settingService.GetActiveMakeList()];
                    case 1:
                        //  this.aCustomer.ID = -1;
                        _a.Makes = _c.sent();
                        this.aCustomer = this.customerService.SelectctedCustomer;
                        if (!(this.aCustomer.ID !== -1 && this.aCustomer.ID !== undefined)) return [3 /*break*/, 3];
                        _b = this;
                        return [4 /*yield*/, this.customerService.GetVehicleList(this.aCustomer.ID)];
                    case 2:
                        _b.VehicleList = _c.sent();
                        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.VehicleList);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        this.displayedColumns = ['Year', 'Make', 'Model', 'EngineSize', 'VIN', 'Description', 'Actions'];
                        _c.label = 3;
                    case 3:
                        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) { return _this._filter(value); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerSettingComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.Makes.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    CustomerSettingComponent.prototype._filterModel = function (value) {
        var filterValue = value.toLowerCase();
        return this.Models.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    CustomerSettingComponent.prototype.AddUpdateCustomer = function () {
        var _this = this;
        this.customerService.AddUpdateCustomer(this.aCustomer).subscribe(function (res) {
            var response = res;
            _this.aCustomer.ID = response.CustomerID;
            _this.echo.Success(response.Message);
        }, function (err) {
            // console.log(err);
            var e = err;
            _this.echo.Error(e.error.Value);
        });
    };
    CustomerSettingComponent.prototype.AddUpdateVehicle = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.aVehicle.CustomerID = this.aCustomer.ID;
                this.customerService.AddUpdateVehicle(this.aVehicle).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _a = this;
                                _b = _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"].bind;
                                return [4 /*yield*/, this.customerService.GetVehicleList(this.aCustomer.ID)];
                            case 1:
                                _a.dataSource = new (_b.apply(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"], [void 0, _c.sent()]))();
                                this.dataSource.paginator = this.paginator;
                                this.dataSource.sort = this.sort;
                                this.displayedColumns = ['Year', 'Make', 'Model', 'EngineSize', 'VIN', 'Description', 'Actions'];
                                this.echo.Success(res);
                                this.Reset(form);
                                return [2 /*return*/];
                        }
                    });
                }); }, function (err) {
                    console.log(err);
                    var e = err;
                    _this.echo.Error(e.error.Value);
                });
                return [2 /*return*/];
            });
        });
    };
    CustomerSettingComponent.prototype.Reset = function (form) {
        this.aVehicle.ID = -1;
        this.aVehicle.Make = '';
        this.aVehicle.Model = '';
        this.aVehicle.Description = '';
        this.aVehicle.EngineSize = '';
        this.aVehicle.VIN = '';
        this.aVehicle.Year = '';
        form.resetForm();
    };
    CustomerSettingComponent.prototype.Edit = function (aVehicle) {
        this.aVehicle = aVehicle;
    };
    CustomerSettingComponent.prototype.DeleteVehicle = function (VehicleID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#00bcd4',
                    cancelButtonColor: '#d33',
                    focusConfirm: false,
                    confirmButtonText: 'Yes, delete it!'
                }).then(function (result) {
                    if (result.value) {
                        _this.DeleteVehicleInner(VehicleID);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    CustomerSettingComponent.prototype.DeleteVehicleInner = function (VehicleID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.customerService.DeleteVehicle(VehicleID).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this.echo.Success(res);
                                _a = this;
                                return [4 /*yield*/, this.customerService.GetVehicleList(this.aCustomer.ID)];
                            case 1:
                                _a.VehicleList = _b.sent();
                                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.VehicleList);
                                this.dataSource.paginator = this.paginator;
                                this.dataSource.sort = this.sort;
                                this.displayedColumns = ['Year', 'Make', 'Model', 'EngineSize', 'VIN', 'Description', 'Actions'];
                                return [2 /*return*/];
                        }
                    });
                }); }, function (err) {
                    console.log(err);
                    var e = err;
                    _this.echo.Error(e.error.Value);
                });
                return [2 /*return*/];
            });
        });
    };
    CustomerSettingComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CustomerSettingComponent.prototype.IsCustomerExist = function () {
        if (this.customerService.SelectctedCustomer.ID === -1 || this.aCustomer.ID === undefined) {
            return false;
        }
        return true;
    };
    CustomerSettingComponent.prototype.ExportCSV = function () {
        var date = new Date();
        var reportHeader = ['VehicleID', 'CustomerID', 'Make', 'Model', 'Year', 'Note', 'Engine Size', 'VIN'];
        this.csvService.Export(this.VehicleList, reportHeader, 'Vehicle List of' + this.aCustomer.FirstName + ' ' + this.aCustomer.MiddleName + ' ' + this.aCustomer.LastName + '  | ' + date.toString());
    };
    CustomerSettingComponent.prototype.OnFocusModel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.aVehicle.Make !== '')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.settingService.GetModelList(this.aVehicle.Make)];
                    case 1:
                        _a.Models = _b.sent();
                        this.filteredOptionsModel = this.myControlModel.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) { return _this._filterModel(value); }));
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], CustomerSettingComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], CustomerSettingComponent.prototype, "sort", void 0);
    CustomerSettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-setting',
            template: __webpack_require__(/*! raw-loader!./customer-setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/Controllers/customer/customer-setting/customer-setting.component.html")
        }),
        __metadata("design:paramtypes", [app_Services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"], app_Services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"], app_Services_csvservice_service__WEBPACK_IMPORTED_MODULE_5__["CSVServiceService"], app_Services_setting_service_service__WEBPACK_IMPORTED_MODULE_7__["SettingServiceService"]])
    ], CustomerSettingComponent);
    return CustomerSettingComponent;
}());



/***/ }),

/***/ "./src/app/Controllers/customer/customer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Controllers/customer/customer.component.ts ***!
  \************************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/Controllers/customer/customer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/Controllers/repair/repair-setting/repair-setting.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Controllers/repair/repair-setting/repair-setting.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RepairSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepairSettingComponent", function() { return RepairSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_Services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/Services/notification.service */ "./src/app/Services/notification.service.ts");
/* harmony import */ var app_Services_repair_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/Services/repair.service */ "./src/app/Services/repair.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_Services_csvservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/Services/csvservice.service */ "./src/app/Services/csvservice.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var RepairSettingComponent = /** @class */ (function () {
    function RepairSettingComponent(RepairService, echo, _router, dPipe, csvService) {
        this.RepairService = RepairService;
        this.echo = echo;
        this._router = _router;
        this.dPipe = dPipe;
        this.csvService = csvService;
        this.tstImg = new Blob();
        this.HostPath = "";
        this.statusList = ['Scheduled', 'Checked-In', 'In-Progress', 'Complete', 'Checked-Out'];
        this.repairModel = {};
        this.fileList = {};
        this.searchModel = {};
        this.HostPath = this.RepairService.HostUrl + '/images//';
    }
    RepairSettingComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        this.today = new Date();
                        _a = this;
                        return [4 /*yield*/, this.RepairService.SelectedRepairModel];
                    case 1:
                        _a.repairModel = _g.sent();
                        _b = this;
                        return [4 /*yield*/, this.RepairService.SelectedSearchModel];
                    case 2:
                        _b.searchModel = _g.sent();
                        if (!(this.searchModel.VehicleID === undefined)) return [3 /*break*/, 3];
                        this._router.navigate(['repair/list']);
                        return [3 /*break*/, 8];
                    case 3:
                        _c = this.repairModel;
                        return [4 /*yield*/, this.searchModel.VehicleID];
                    case 4:
                        _c.VehicleID = _g.sent();
                        _d = this.repairModel;
                        return [4 /*yield*/, this.searchModel.CustomerID];
                    case 5:
                        _d.CustomerID = _g.sent();
                        _e = this;
                        return [4 /*yield*/, this.RepairService.GetImages(this.repairModel.CustomerID)];
                    case 6:
                        _e.FileList = _g.sent();
                        //this.tstImg= await this.imgSrc[10];
                        //console.log(await this.RepairService.GetImage());
                        this.repairModel.UserID = +sessionStorage.getItem('UserID');
                        _f = this;
                        return [4 /*yield*/, this.RepairService.GetRepairlist(this.repairModel.VehicleID)];
                    case 7:
                        _f.RepairList = _g.sent();
                        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.RepairList);
                        this.PrintDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.RepairList);
                        this.dataSource.paginator = this.DataPaginator;
                        // this.dataSource.sort = this.sort;
                        this.displayedColumns1 = ['Date', 'Reason', 'WorkPerformed', 'Suggestion', 'Note', 'NextAppointment', 'NextAppointmentTime', 'Status', 'UserName', 'Actions'];
                        this.displayedColumns3 = ['Date', 'Reason', 'WorkPerformed', 'Suggestion', 'Note', 'NextAppointment', 'UserName'];
                        this.ImageSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.FileList);
                        this.ImageSource.paginator = this.ImagePaginator;
                        //this.dataSource.sort = this.sort;
                        this.displayedColumns2 = ['Data', 'View', 'Action'];
                        _g.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    RepairSettingComponent.prototype.AddUpdateRepair = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, i, key;
            var _this = this;
            return __generator(this, function (_a) {
                formData = new FormData();
                if (this.fileList != null) {
                    for (i = 0; i < this.fileList.length; i++) {
                        formData.append('FileList', this.fileList[i], this.fileList[i].name);
                    }
                }
                for (key in this.repairModel) {
                    formData.append(key, this.repairModel[key]);
                }
                this.RepairService.AddUpdateRepair(formData).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                this.echo.Success(res);
                                _a = this;
                                return [4 /*yield*/, this.RepairService.GetRepairlist(this.repairModel.VehicleID)];
                            case 1:
                                _a.RepairList = _c.sent();
                                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.RepairList);
                                this.PrintDatasource = this.dataSource;
                                this.dataSource.paginator = this.DataPaginator;
                                this.displayedColumns1 = ['Date', 'Reason', 'WorkPerformed', 'Suggestion', 'Note', 'NextAppointment', 'NextAppointmentTime', 'Status', 'UserName', 'Actions'];
                                _b = this;
                                return [4 /*yield*/, this.RepairService.GetImages(this.repairModel.CustomerID)];
                            case 2:
                                _b.FileList = _c.sent();
                                this.ImageSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.FileList);
                                this.ImageSource.paginator = this.ImagePaginator;
                                this.displayedColumns2 = ['Data', 'View', 'Action'];
                                this.Clear(form);
                                return [2 /*return*/];
                        }
                    });
                }); }, function (err) {
                    console.log(err);
                    var e = err;
                    _this.echo.Error(e.error.Value);
                });
                return [2 /*return*/];
            });
        });
    };
    RepairSettingComponent.prototype.Edit = function (r) {
        this.repairModel = r;
    };
    RepairSettingComponent.prototype.Clear = function (form) {
        form.resetForm();
        this.repairModel.Date = null;
        this.repairModel.Reason = '';
        this.repairModel.WorkPerformed = '';
        this.repairModel.Suggestion = '';
        this.repairModel.Note = '';
        this.repairModel.NextAppointment = null;
        this.repairModel.Status = '';
        this.fileList = null;
    };
    RepairSettingComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    RepairSettingComponent.prototype.ExportCSV = function () {
        var date = new Date();
        var reportHeader = ['Date', 'Reason', 'WorkPerformed', 'Suggestion', 'Note', 'NextAppointment', 'NextAppointmentTime', 'Status', 'UserName', 'Actions'];
        this.csvService.Export(this.RepairList, reportHeader, 'Visiting History of ' + this.searchModel.Make + ' ' + this.searchModel.Model + '  | ' + date.toString());
        // const printContent = document.getElementById("tryPrint");
        // const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
        // WindowPrt.document.write(printContent.innerHTML);
        // WindowPrt.document.close();
        // WindowPrt.focus();
        // WindowPrt.print();
        // WindowPrt.close();
    };
    RepairSettingComponent.prototype.onFileSelected = function (event) {
        this.fileList = event.target.files;
    };
    RepairSettingComponent.prototype.DeleteImage = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00bcd4',
            cancelButtonColor: '#d33',
            focusConfirm: false,
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DeleteImageInner(id);
                // Swal.fire(
                //   'Deleted!',
                //   'Repair information has been deleted.',
                //   'success'
                // )
            }
        });
    };
    RepairSettingComponent.prototype.DeleteImageInner = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.RepairService.DeleteImage(id).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this.echo.Success(res);
                                _a = this;
                                return [4 /*yield*/, this.RepairService.GetImages(this.repairModel.CustomerID)];
                            case 1:
                                _a.FileList = _b.sent();
                                this.ImageSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.FileList);
                                this.ImageSource.paginator = this.ImagePaginator;
                                this.displayedColumns2 = ['Data', 'Action'];
                                return [2 /*return*/];
                        }
                    });
                }); }, function (err) {
                    console.log(err);
                    var e = err;
                    _this.echo.Error(e.error.Value);
                });
                return [2 /*return*/];
            });
        });
    };
    RepairSettingComponent.prototype.DeleteVisit = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00bcd4',
            cancelButtonColor: '#d33',
            focusConfirm: false,
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DeleteVisitInner(id);
                // Swal.fire(
                //   'Deleted!',
                //   'Repair information has been deleted.',
                //   'success'
                // )
            }
        });
    };
    RepairSettingComponent.prototype.DeleteVisitInner = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.RepairService.DeleteVisit(id).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                this.echo.Success(res);
                                _a = this;
                                return [4 /*yield*/, this.RepairService.GetRepairlist(this.repairModel.VehicleID)];
                            case 1:
                                _a.RepairList = _c.sent();
                                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.RepairList);
                                this.dataSource.paginator = this.DataPaginator;
                                this.displayedColumns1 = ['Date', 'Reason', 'WorkPerformed', 'Suggestion', 'Note', 'NextAppointment', 'NextAppointmentTime', 'Status', 'UserName', 'Actions'];
                                _b = this;
                                return [4 /*yield*/, this.RepairService.GetImages(this.repairModel.CustomerID)];
                            case 2:
                                _b.FileList = _c.sent();
                                this.ImageSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.FileList);
                                this.ImageSource.paginator = this.ImagePaginator;
                                this.displayedColumns2 = ['Data', 'Action'];
                                return [2 /*return*/];
                        }
                    });
                }); }, function (err) {
                    console.log(err);
                    var e = err;
                    _this.echo.Error(e.error.Value);
                });
                return [2 /*return*/];
            });
        });
    };
    RepairSettingComponent.prototype.GetHistoryByDate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _RepairDateModel;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.DateToModel !== undefined && this.DateFromModel !== undefined)) return [3 /*break*/, 3];
                        _RepairDateModel = {};
                        _RepairDateModel.VehicleID = this.repairModel.VehicleID;
                        _RepairDateModel.DateFrom = this.DateFromModel;
                        _RepairDateModel.DateTo = this.DateToModel;
                        return [4 /*yield*/, this.RepairService.GetRepairlistByDate(_RepairDateModel)];
                    case 1: return [4 /*yield*/, (_a.sent()).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var repairList;
                            return __generator(this, function (_a) {
                                repairList = res;
                                this.RepairList = repairList;
                                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.RepairList);
                                this.PrintDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.RepairList);
                                this.dataSource.paginator = this.DataPaginator;
                                return [2 /*return*/];
                            });
                        }); }, function (err) {
                        })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RepairSettingComponent.prototype.IsDateUndefined = function () {
        if (this.DateToModel !== undefined && this.DateFromModel !== undefined) {
            return false;
        }
        return true;
    };
    RepairSettingComponent.prototype.IsSingleRow = function () {
        if (this.RepairList !== undefined)
            if (this.RepairList.length === 1)
                return true;
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('DataPaginator', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], RepairSettingComponent.prototype, "DataPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ImagePaginator', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], RepairSettingComponent.prototype, "ImagePaginator", void 0);
    RepairSettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-repair-setting',
            template: __webpack_require__(/*! raw-loader!./repair-setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/Controllers/repair/repair-setting/repair-setting.component.html")
        }),
        __metadata("design:paramtypes", [app_Services_repair_service__WEBPACK_IMPORTED_MODULE_3__["RepairService"], app_Services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], app_Services_csvservice_service__WEBPACK_IMPORTED_MODULE_5__["CSVServiceService"]])
    ], RepairSettingComponent);
    return RepairSettingComponent;
}());



/***/ }),

/***/ "./src/app/Controllers/repair/repair.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Controllers/repair/repair.component.ts ***!
  \********************************************************/
/*! exports provided: RepairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepairComponent", function() { return RepairComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RepairComponent = /** @class */ (function () {
    function RepairComponent() {
    }
    RepairComponent.prototype.ngOnInit = function () {
    };
    RepairComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-repair',
            template: __webpack_require__(/*! raw-loader!./repair.component.html */ "./node_modules/raw-loader/index.js!./src/app/Controllers/repair/repair.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RepairComponent);
    return RepairComponent;
}());



/***/ }),

/***/ "./src/app/Controllers/repair/vehicle-list/vehicle-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Controllers/repair/vehicle-list/vehicle-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: VehicleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleListComponent", function() { return VehicleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_Services_repair_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Services/repair.service */ "./src/app/Services/repair.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_Services_csvservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/Services/csvservice.service */ "./src/app/Services/csvservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var VehicleListComponent = /** @class */ (function () {
    function VehicleListComponent(service, _router, csvService) {
        this.service = service;
        this._router = _router;
        this.csvService = csvService;
    }
    VehicleListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.service.GetRepairSearchList()];
                    case 1:
                        _a.RepairSearchList = _b.sent();
                        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.RepairSearchList);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        this.displayedColumns = ['CustomerFullName', 'Phone', 'Year', 'Make', 'Model', 'EngineSize', 'Description', 'Actions'];
                        return [2 /*return*/];
                }
            });
        });
    };
    VehicleListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    VehicleListComponent.prototype.Edit = function (searchModel) {
        this.service.SelectedSearchModel = searchModel;
        this._router.navigate(['repair/setting']);
    };
    VehicleListComponent.prototype.ExportCSV = function () {
        var date = new Date();
        var reportHeader = ['VehicleID', 'CustomerID', 'Customer', 'Phone', 'Vehicle Make', 'Model', 'Year', 'Note', 'Engine Size', 'VIN'];
        this.csvService.Export(this.RepairSearchList, reportHeader, 'Visiting list  | ' + date.toString());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], VehicleListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], VehicleListComponent.prototype, "sort", void 0);
    VehicleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-list',
            template: __webpack_require__(/*! raw-loader!./vehicle-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/Controllers/repair/vehicle-list/vehicle-list.component.html")
        }),
        __metadata("design:paramtypes", [app_Services_repair_service__WEBPACK_IMPORTED_MODULE_1__["RepairService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_Services_csvservice_service__WEBPACK_IMPORTED_MODULE_4__["CSVServiceService"]])
    ], VehicleListComponent);
    return VehicleListComponent;
}());



/***/ }),

/***/ "./src/app/Controllers/setting/setting.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Controllers/setting/setting.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_Services_setting_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/Services/setting-service.service */ "./src/app/Services/setting-service.service.ts");
/* harmony import */ var app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/Services/notification.service */ "./src/app/Services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SettingComponent = /** @class */ (function () {
    function SettingComponent(settingService, echo) {
        this.settingService = settingService;
        this.echo = echo;
        this.MakeList = {};
        this.aMake = {};
        this.Makes = ['Make', 'Model', 'Active'];
    }
    SettingComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.settingService.GetAllMakeList()];
                    case 1:
                        _a.MakeList = _b.sent();
                        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.MakeList);
                        this.dataSource.paginator = this.paginator;
                        this.displayedColumns = ['Make', 'Model', 'Active', 'Actions'];
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingComponent.prototype.Edit = function (m) {
        this.aMake = m;
    };
    SettingComponent.prototype.AddUpdateVehicle = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.settingService.AddUpdateMake(this.aMake).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this.echo.Success(res);
                                _a = this;
                                return [4 /*yield*/, this.settingService.GetAllMakeList()];
                            case 1:
                                _a.MakeList = _b.sent();
                                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.MakeList);
                                this.dataSource.paginator = this.paginator;
                                this.displayedColumns = ['Make', 'Model', 'Active', 'Actions'];
                                this.Clear(form);
                                return [2 /*return*/];
                        }
                    });
                }); }, function (err) {
                    console.log(err);
                    var e = err;
                    _this.echo.Error(e.error.Value);
                });
                return [2 /*return*/];
            });
        });
    };
    SettingComponent.prototype.Clear = function (form) {
        form.resetForm();
        this.aMake.Active = false;
        this.aMake.Make = '';
        this.aMake.Model = '';
        this.aMake.ID = -1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SettingComponent.prototype, "paginator", void 0);
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/Controllers/setting/setting.component.html")
        }),
        __metadata("design:paramtypes", [app_Services_setting_service_service__WEBPACK_IMPORTED_MODULE_2__["SettingServiceService"], app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/Controllers/user/user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Controllers/user/user.component.ts ***!
  \****************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_Models_user_model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Models/user-model.model */ "./src/app/Models/user-model.model.ts");
/* harmony import */ var app_Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/Services/notification.service */ "./src/app/Services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(service, echo, _route, _userModel) {
        this.service = service;
        this.echo = echo;
        this._route = _route;
        this._userModel = _userModel;
        this.NewUserModel = _userModel;
        this.UpdateUserModel = _userModel;
        this.UpdateUserNameHintText = "";
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userName = sessionStorage.getItem('UserName');
        this.service.GetUserByName(userName).toPromise().then(function (res) { return _this.UpdateUserModel = res; });
    };
    UserComponent.prototype.AddNewUser = function (form) {
        var _this = this;
        this.service.AddUpdateUser(this.NewUserModel).subscribe(function (res) {
            _this.echo.Success(res);
            _this.Clear(form);
        }, function (err) {
            //console.log(err);
            var e = err;
            _this.echo.Error(e.error.Value);
        });
    };
    UserComponent.prototype.UpdateUser = function () {
        var _this = this;
        this.service.AddUpdateUser(this.UpdateUserModel).subscribe(function (res) {
            _this.echo.Success(res);
        }, function (err) {
            // console.log(err);
            var e = err;
            _this.echo.Error(e.error.Value);
        });
    };
    UserComponent.prototype.IsMatched = function () {
        if (this.NewUserModel.Password !== this.ConfirmPassword) {
            return false;
        }
        return true;
    };
    UserComponent.prototype.Clear = function (form) {
        form.resetForm();
        this.NewUserModel.Password = '';
        this.NewUserModel.Email = '';
        this.NewUserModel.FirstName = '';
        this.NewUserModel.LastName = '';
        this.NewUserModel.UserName = '';
    };
    UserComponent.prototype.CheckUpdateUserName = function () {
        var _this = this;
        if (this.UpdateUserModel.UserName.length > 0) {
            this.service.IsUserNameUnique(this.UpdateUserModel.UserName).subscribe(function (res) {
                var response = res;
                if (!response) {
                    _this.UpdateUserNameHintText = "User name already in use.";
                }
                else {
                    _this.UpdateUserNameHintText = "";
                }
            });
        }
    };
    UserComponent.prototype.CheckNewUserName = function () {
        var _this = this;
        if (this.NewUserModel.UserName.length > 0) {
            this.service.IsUserNameUnique(this.NewUserModel.UserName).subscribe(function (res) {
                var response = res;
                if (!response) {
                    _this.NewUserNameHintText = "User name already in use.";
                }
                else {
                    _this.NewUserNameHintText = "";
                }
            });
        }
    };
    UserComponent.prototype.IsUpdateHintTextShown = function () {
        if (this.UpdateUserNameHintText !== "") {
            return true;
        }
        else {
            return false;
        }
    };
    UserComponent.prototype.IsNewHintTextShown = function () {
        if (this.NewUserNameHintText !== "") {
            return true;
        }
        else {
            return false;
        }
    };
    UserComponent.prototype.Nav = function () {
        this._route.navigate(['login']);
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/Controllers/user/user.component.html")
        }),
        __metadata("design:paramtypes", [app_Services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_Models_user_model_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/Models/user-model.model.ts":
/*!********************************************!*\
  !*** ./src/app/Models/user-model.model.ts ***!
  \********************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    UserModel = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserModel);
    return UserModel;
}());



/***/ }),

/***/ "./src/app/Services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/Services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/Services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, _route) {
        this.userService = userService;
        this._route = _route;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        // if(this.userService.IsLoggedIn===true){
        //   return true;
        // }
        if (sessionStorage.getItem('UserID') !== "" && sessionStorage.length > 0) {
            return true;
        }
        else {
            this._route.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Services/csvservice.service.ts":
/*!************************************************!*\
  !*** ./src/app/Services/csvservice.service.ts ***!
  \************************************************/
/*! exports provided: CSVServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSVServiceService", function() { return CSVServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-csv/ngx-csv */ "./node_modules/ngx-csv/ngx-csv.js");
/* harmony import */ var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CSVServiceService = /** @class */ (function () {
    function CSVServiceService(csvservice) {
        this.csvservice = csvservice;
    }
    CSVServiceService.prototype.Export = function (data, _header, _title) {
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: false,
            showTitle: true,
            title: _title,
            useBom: false,
            noDownload: false,
            headers: _header
        };
        new ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_1__["ngxCsv"](data, 'My Report', options);
    };
    CSVServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [CSVServiceService])
    ], CSVServiceService);
    return CSVServiceService;
}());



/***/ }),

/***/ "./src/app/Services/dashboard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var DashboardService = /** @class */ (function () {
    function DashboardService(http, baseUrl) {
        this.http = http;
        this.summary = {};
        this.HostUrl = baseUrl;
    }
    DashboardService.prototype.GetSummary = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.HostUrl + 'api/dashboard/GetSummary/').toPromise()
                            .then(function (res) { return _this.summary = res; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.summary];
                }
            });
        });
    };
    DashboardService.prototype.GetRepairByStatus = function (_statusModel) {
        var statusModel = {};
        statusModel.Status = _statusModel.Status;
        statusModel.Date = this.AdjustDate(_statusModel.Date);
        return this.http.post(this.HostUrl + 'api/dashboard/GetRepairListByStatus', statusModel);
    };
    DashboardService.prototype.GetAppointmentsByDate = function (_date) {
        return __awaiter(this, void 0, void 0, function () {
            var date;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = this.AdjustDate(_date);
                        return [4 /*yield*/, this.http.get(this.HostUrl + 'api/dashboard/GetAppointmentsByDate/' + date.toDateString()).toPromise()
                                .then(function (res) { return _this.summary = res; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.summary];
                }
            });
        });
    };
    DashboardService.prototype.GetRepairByDate = function (_date) {
        return __awaiter(this, void 0, void 0, function () {
            var date;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = this.AdjustDate(_date);
                        return [4 /*yield*/, this.http.get(this.HostUrl + 'api/dashboard/GetRepairByDate/' + date.toDateString()).toPromise()
                                .then(function (res) { return _this.summary = res; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.summary];
                }
            });
        });
    };
    DashboardService.prototype.AdjustDate = function (dateToAdjust) {
        var newDate = new Date(dateToAdjust);
        newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset());
        return newDate;
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/Services/repair.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/repair.service.ts ***!
  \********************************************/
/*! exports provided: RepairService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepairService", function() { return RepairService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var RepairService = /** @class */ (function () {
    function RepairService(http, baseUrl) {
        this.http = http;
        this.SelectedSearchModel = {};
        this.SelectedRepairModel = {};
        this.HostUrl = baseUrl;
    }
    RepairService.prototype.GetRepairSearchList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.HostUrl + 'api/Repair/GetRepairSearchList').toPromise()
                            .then(function (res) { return list = res; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, list];
                }
            });
        });
    };
    RepairService.prototype.GetRepairlist = function (vehicleID) {
        return __awaiter(this, void 0, void 0, function () {
            var repairList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.HostUrl + 'api/repair/GetRepairList/' + vehicleID).toPromise()
                            .then(function (res) { return repairList = res; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, repairList];
                }
            });
        });
    };
    RepairService.prototype.GetRepairlistByDate = function (Model) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(this.HostUrl + 'api/repair/GetRepairListByDate', Model)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RepairService.prototype.GetImages = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var FileList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.HostUrl + 'api/repair/GetImage/' + id).toPromise()
                            .then(function (res) { return FileList = res; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, FileList];
                }
            });
        });
    };
    RepairService.prototype.AddUpdateRepair = function (rModel) {
        var date = this.AdjustDate(rModel.get('Date'));
        rModel.set('Date', date.toUTCString());
        var NextAppointment = this.AdjustDate(rModel.get('NextAppointment'));
        rModel.set('NextAppointment', NextAppointment.toUTCString());
        return this.http.post(this.HostUrl + 'api/repair/AddUpdateRepair', rModel);
    };
    RepairService.prototype.UploadFile = function (FileList) {
        return this.http.post(this.HostUrl + 'api/repair/UploadFile', FileList);
    };
    RepairService.prototype.AdjustDate = function (dateToAdjust) {
        var newDate = new Date(dateToAdjust);
        newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset());
        return newDate;
    };
    RepairService.prototype.DeleteImage = function (id) {
        return this.http.get(this.HostUrl + 'api/repair/DeleteImage/' + id);
    };
    RepairService.prototype.DeleteVisit = function (id) {
        return this.http.get(this.HostUrl + 'api/repair/DeleteVisit/' + id);
    };
    RepairService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], RepairService);
    return RepairService;
}());



/***/ }),

/***/ "./src/app/Services/setting-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Services/setting-service.service.ts ***!
  \*****************************************************/
/*! exports provided: SettingServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingServiceService", function() { return SettingServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var SettingServiceService = /** @class */ (function () {
    function SettingServiceService(http, baseUrl) {
        this.http = http;
        this.HostUrl = baseUrl;
    }
    SettingServiceService.prototype.GetAllMakeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.HostUrl + 'api/setting/GetAllMakeList').toPromise()
                            .then(function (res) { return list = res; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, list];
                }
            });
        });
    };
    SettingServiceService.prototype.GetActiveMakeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.HostUrl + 'api/setting/GetActiveMakeList').toPromise()
                            .then(function (res) { return list = res; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, list];
                }
            });
        });
    };
    SettingServiceService.prototype.GetModelList = function (Make) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.HostUrl + 'api/setting/GetModelList/' + Make).toPromise()
                            .then(function (res) { return list = res; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, list];
                }
            });
        });
    };
    SettingServiceService.prototype.AddUpdateMake = function (mModel) {
        console.log(mModel.Active);
        return this.http.post(this.HostUrl + 'api/setting/AddUpdateMake', mModel);
    };
    SettingServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], SettingServiceService);
    return SettingServiceService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_Services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Services/dashboard.service */ "./src/app/Services/dashboard.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_Services_csvservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/Services/csvservice.service */ "./src/app/Services/csvservice.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service, csvService) {
        this.service = service;
        this.csvService = csvService;
        this.reportHeader = ['CustomerFullName', 'Vehicle', 'Reason', 'Phone', 'WorkPerformed', 'Note'];
        this.reportHeaderAppointment = ['CustomerFullName', 'Vehicle', 'Last Visited Reason', 'Phone', 'Last Work Performed', 'Note', 'Time'];
        this.statusList = ['Scheduled', 'Checked-In', 'In-Progress', 'Complete', 'Checked-Out'];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repairedYesterday, appointmentTomorrow, repairingNow, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.Status = this.statusList[2];
                        this.dateStatus = this.service.AdjustDate(new Date());
                        _a = this;
                        return [4 /*yield*/, this.service.GetSummary()];
                    case 1:
                        _a.summary = _b.sent();
                        appointmentTomorrow = this.summary.AppointmentTomorrow;
                        this.appointmentToday = this.summary.AppointmentToday;
                        this.repairedToday = this.summary.RepairedToday;
                        repairedYesterday = this.summary.RepairedYesterday;
                        repairingNow = this.summary.RepairingNow;
                        this.todayRepairCount = this.repairedToday.length;
                        this.yesterdayRepairCount = repairedYesterday.length;
                        this.tomorrowAppointmentCount = appointmentTomorrow.length;
                        this.todayAppointmentCount = this.appointmentToday.length;
                        this.repairingNowCount = repairingNow.length;
                        this.dataSourceAppointmentTomorrow = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](appointmentTomorrow);
                        this.dataSourceAppointmentTomorrow.paginator = this.paginatorAppointmentTomorrow;
                        // this.dataSourceTomorrow.sort = this.sort;
                        this.dataSourceRepairingNow = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](repairingNow);
                        this.dataSourceRepairingNow.paginator = this.paginatorRepairingNow;
                        this.dataSourceAppointmentToday = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.appointmentToday);
                        this.dataSourceAppointmentToday.paginator = this.paginatorAppointmentToday;
                        // this.dataSourceToday.sort = this.sort;
                        this.dataSourceRepairedToday = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.repairedToday);
                        this.dataSourceRepairedToday.paginator = this.paginatorRepairedToday;
                        // this.dataSourceToday.sort = this.sort;
                        this.dataSourceRepairedYesterday = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](repairedYesterday);
                        this.dataSourceRepairedYesterday.paginator = this.paginatorRepairedYesterday;
                        // this.dataSourceYesterday.sort = this.sort;
                        this.displayedColumnsRepairingNow = ['CustomerFullName', 'Vehicle', 'Reason', 'WorkPerformed'];
                        this.displayedColumnsRepairedToday = ['CustomerFullName', 'Vehicle', 'Reason', 'WorkPerformed'];
                        this.displayedColumnsRepairedYesterday = ['CustomerFullName', 'Vehicle', 'Reason', 'WorkPerformed'];
                        this.displayedColumnsAppointmentTomorrow = ['CustomerFullName', 'Phone', 'Time', 'Vehicle', 'Reason', 'Note'];
                        this.displayedColumnsAppointmentToday = ['CustomerFullName', 'Phone', 'Time', 'Vehicle', 'Reason', 'Note'];
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.ExportRepairingNow = function () {
        var date = new Date();
        this.csvService.Export(this.summary.RepairingNow, this.reportHeader, 'Vehicles Repairing Now | ' + date.toString());
    };
    DashboardComponent.prototype.ExportRepairedToday = function () {
        var date = new Date();
        this.csvService.Export(this.summary.RepairedToday, this.reportHeader, 'Vehicles Repaired Today | ' + date.toString());
    };
    DashboardComponent.prototype.ExportRepairedYesterday = function () {
        var date = new Date();
        date.setDate(date.getDate() - 1);
        this.csvService.Export(this.summary.RepairedYesterday, this.reportHeader, 'Vehicles Repaired Yesterday | ' + date.toString());
    };
    DashboardComponent.prototype.AppointmentToday = function () {
        var date = new Date();
        this.csvService.Export(this.summary.AppointmentToday, this.reportHeaderAppointment, 'Todays Appointment List | ' + date.toString());
    };
    DashboardComponent.prototype.AppointmentTomorrow = function () {
        var date = new Date();
        date.setDate(date.getDate() + 1);
        this.csvService.Export(this.summary.AppointmentTomorrow, this.reportHeaderAppointment, 'Tomorrows Appointment List | ' + date.toString());
    };
    DashboardComponent.prototype.applyFilterTomorrow = function (filterValue) {
        this.dataSourceAppointmentTomorrow.filter = filterValue.trim().toLowerCase();
    };
    DashboardComponent.prototype.applyFilterRepairingNow = function (filterValue) {
        this.dataSourceRepairingNow.filter = filterValue.trim().toLowerCase();
    };
    DashboardComponent.prototype.applyFilterToday = function (filterValue) {
        this.dataSourceRepairedToday.filter = filterValue.trim().toLowerCase();
    };
    DashboardComponent.prototype.applyFilterYesterday = function (filterValue) {
        this.dataSourceRepairedYesterday.filter = filterValue.trim().toLowerCase();
    };
    DashboardComponent.prototype.applyFilterAppointmentToday = function (filterValue) {
        this.dataSourceAppointmentToday.filter = filterValue.trim().toLowerCase();
    };
    DashboardComponent.prototype.test = function () {
        Object(util__WEBPACK_IMPORTED_MODULE_4__["log"])('sss');
        window.alert('s');
    };
    DashboardComponent.prototype.GetAppointmentsByDate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var appointments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.GetAppointmentsByDate(this.dateAppointment)];
                    case 1:
                        appointments = _a.sent();
                        this.appointmentToday = appointments;
                        // window.alert(this.date );
                        this.dataSourceAppointmentToday = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.appointmentToday);
                        this.dataSourceAppointmentToday.paginator = this.paginatorAppointmentToday;
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.GetRepairByDate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repairs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.GetRepairByDate(this.dateRepair)];
                    case 1:
                        repairs = _a.sent();
                        this.repairedToday = repairs;
                        // window.alert(this.date );
                        this.dataSourceRepairedToday = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.repairedToday);
                        this.dataSourceRepairedToday.paginator = this.paginatorRepairedToday;
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.OnFocusStatus = function () {
        var _this = this;
        var StatusModel = {};
        StatusModel.Status = this.Status,
            StatusModel.Date = this.dateStatus;
        var repairingNow;
        this.service.GetRepairByStatus(StatusModel).subscribe(function (res) {
            var response = res;
            _this.dataSourceRepairingNow = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](response);
            _this.dataSourceRepairingNow.paginator = _this.paginatorRepairingNow;
        }, function (err) {
            // console.log(err);
            var e = err;
            // this.echo.Error(e.error.Value);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginatorRepairingNow', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DashboardComponent.prototype, "paginatorRepairingNow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginatorRepairedToday', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DashboardComponent.prototype, "paginatorRepairedToday", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginatorRepairedYesterday', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DashboardComponent.prototype, "paginatorRepairedYesterday", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginatorAppointmentTomorrow', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DashboardComponent.prototype, "paginatorAppointmentTomorrow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginatorAppointmentToday', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DashboardComponent.prototype, "paginatorAppointmentToday", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [app_Services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"], app_Services_csvservice_service__WEBPACK_IMPORTED_MODULE_3__["CSVServiceService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_Controllers_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Controllers/user/user.component */ "./src/app/Controllers/user/user.component.ts");
/* harmony import */ var app_Models_user_model_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/Models/user-model.model */ "./src/app/Models/user-model.model.ts");
/* harmony import */ var app_Controllers_customer_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/Controllers/customer/customer.component */ "./src/app/Controllers/customer/customer.component.ts");
/* harmony import */ var app_Controllers_customer_customer_setting_customer_setting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/Controllers/customer/customer-setting/customer-setting.component */ "./src/app/Controllers/customer/customer-setting/customer-setting.component.ts");
/* harmony import */ var app_Controllers_customer_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/Controllers/customer/customer-list/customer-list.component */ "./src/app/Controllers/customer/customer-list/customer-list.component.ts");
/* harmony import */ var app_Controllers_repair_repair_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/Controllers/repair/repair.component */ "./src/app/Controllers/repair/repair.component.ts");
/* harmony import */ var app_Controllers_repair_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/Controllers/repair/vehicle-list/vehicle-list.component */ "./src/app/Controllers/repair/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var app_Controllers_repair_repair_setting_repair_setting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/Controllers/repair/repair-setting/repair-setting.component */ "./src/app/Controllers/repair/repair-setting/repair-setting.component.ts");
/* harmony import */ var app_Controllers_setting_setting_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/Controllers/setting/setting.component */ "./src/app/Controllers/setting/setting.component.ts");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/fesm5/ngx-material-timepicker.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_16__["NgxMaterialTimepickerModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_17__["NgxPrintModule"]
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                app_Controllers_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                app_Controllers_customer_customer_component__WEBPACK_IMPORTED_MODULE_9__["CustomerComponent"],
                app_Controllers_customer_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_11__["CustomerListComponent"],
                app_Controllers_customer_customer_setting_customer_setting_component__WEBPACK_IMPORTED_MODULE_10__["CustomerSettingComponent"],
                app_Controllers_repair_repair_component__WEBPACK_IMPORTED_MODULE_12__["RepairComponent"],
                app_Controllers_repair_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_13__["VehicleListComponent"],
                app_Controllers_repair_repair_setting_repair_setting_component__WEBPACK_IMPORTED_MODULE_14__["RepairSettingComponent"],
                app_Controllers_setting_setting_component__WEBPACK_IMPORTED_MODULE_15__["SettingComponent"],
            ],
            providers: [app_Models_user_model_model__WEBPACK_IMPORTED_MODULE_8__["UserModel"]]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var app_Controllers_user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Controllers/user/user.component */ "./src/app/Controllers/user/user.component.ts");
/* harmony import */ var app_Services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/Services/auth.guard */ "./src/app/Services/auth.guard.ts");
/* harmony import */ var app_Controllers_customer_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/Controllers/customer/customer.component */ "./src/app/Controllers/customer/customer.component.ts");
/* harmony import */ var app_Controllers_customer_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/Controllers/customer/customer-list/customer-list.component */ "./src/app/Controllers/customer/customer-list/customer-list.component.ts");
/* harmony import */ var app_Controllers_customer_customer_setting_customer_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/Controllers/customer/customer-setting/customer-setting.component */ "./src/app/Controllers/customer/customer-setting/customer-setting.component.ts");
/* harmony import */ var app_Controllers_repair_repair_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Controllers/repair/repair.component */ "./src/app/Controllers/repair/repair.component.ts");
/* harmony import */ var app_Controllers_repair_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Controllers/repair/vehicle-list/vehicle-list.component */ "./src/app/Controllers/repair/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var app_Controllers_repair_repair_setting_repair_setting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/Controllers/repair/repair-setting/repair-setting.component */ "./src/app/Controllers/repair/repair-setting/repair-setting.component.ts");
/* harmony import */ var app_Controllers_setting_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/Controllers/setting/setting.component */ "./src/app/Controllers/setting/setting.component.ts");










var AdminLayoutRoutes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"], canActivate: [app_Services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'user', component: app_Controllers_user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"], canActivate: [app_Services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    //  { path: 'customer',     component: CustomerComponent, canActivate: [AuthGuard] },
    { path: 'customer', component: app_Controllers_customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"], canActivate: [app_Services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'list', component: app_Controllers_customer_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomerListComponent"] },
            { path: 'setting', component: app_Controllers_customer_customer_setting_customer_setting_component__WEBPACK_IMPORTED_MODULE_5__["CustomerSettingComponent"] },
            { path: '', redirectTo: 'list', pathMatch: 'full' }
        ]
    },
    // { path: 'upgrade',        component: UpgradeComponent },
    { path: 'repair', component: app_Controllers_repair_repair_component__WEBPACK_IMPORTED_MODULE_6__["RepairComponent"], canActivate: [app_Services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'list', component: app_Controllers_repair_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_7__["VehicleListComponent"] },
            { path: 'setting', component: app_Controllers_repair_repair_setting_repair_setting_component__WEBPACK_IMPORTED_MODULE_8__["RepairSettingComponent"] },
            { path: '', redirectTo: 'list', pathMatch: 'full' }
        ]
    },
    { path: 'setting', component: app_Controllers_setting_setting_component__WEBPACK_IMPORTED_MODULE_9__["SettingComponent"], canActivate: [app_Services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
];


/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map