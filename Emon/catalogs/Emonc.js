const a = require("chalk");
const b = require("gradient-string");
const d = b("blue", "purple");
const e = b("yellow", "lime", "green");
const f = b("#243aff", "#4687f0", "#5800d4");
const g = b("#0905ed", "#346eeb", "#344feb");
module.exports = (_0x467fdb, _0x1cfa8d) => {
  switch (_0x1cfa8d) {
    case "warn":
      process.stderr.write(d("warn - ") + _0x467fdb + "\n");
      break;
    case "error":
      process.stderr.write(a.bold.hex("#ff0000").bold("error - ") + _0x467fdb + "\n");
      break;
    case "load":
      process.stderr.write(f("new user - ") + _0x467fdb + "\n");
      break;
    default:
      process.stderr.write(g(String(_0x1cfa8d) + " - ") + _0x467fdb + "\n");
      break;
  }
};
module.exports.error = (_0x4fb03f, _0x543180) => {
  process.stderr.write(a.hex("#ff0000")("error - ") + _0x4fb03f + "\n");
};
module.exports.err = (_0x4e1f6d, _0x18b516) => {
  process.stderr.write(a.hex("#ff0000")("error - ") + _0x4e1f6d) + "\n";
};
module.exports.warn = (_0x542503, _0x332bb8) => {
  process.stderr.write(a.yellow("warn - ") + _0x542503 + "\n");
};
module.exports.loader = (_0x4051da, _0x26b781) => {
  switch (_0x26b781) {
    case "warn":
      process.stderr.write(e("warn - ") + _0x4051da + "\n");
      break;
    case "error":
      process.stderr.write(a.hex("#ff0000")("error - ") + _0x4051da + "\n");
      break;
    default:
      process.stderr.write(f("shaon - ") + _0x4051da + "\n");
      break;
  }
};
