'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.codeToCategory = exports.StatementHistoryCategoryEnumGraphQL = exports.StatementHistoryCategoryEnum = exports.StatementHistoryCategoryGroup = undefined;

var _graphql = require('graphql');

var _tools = require('../tools');

var _StatementHistoryCode = require('./StatementHistoryCode');

var StatementHistoryCategoryEnum = {
  Other: {
    value: 0,
    description: 'Others (see statement description)'
  },
  InternalTransfer: {
    value: 1,
    description: 'Account Balance Transfers in same bank'
  },
  ExternalTransfer: {
    value: 2,
    description: 'Account Balance Transfers in different banks'
  },
  PaymentAndBilling: {
    value: 3,
    description: 'Payment / Billing Transactions'
  },
  ATM: {
    value: 4,
    description: 'ATM Transactions'
  },
  Escrow: {
    value: 5,
    description: 'Escrow Transactions'
  },
  Fee: {
    value: 6,
    description: 'Fee Transactions'
  },
  Invest: {
    value: 7,
    description: 'Investment Transactions'
  }
}; /**
    * Created by Lucas Teske on 29/03/18.
    * 
    */


var StatementHistoryCategoryEnumGraphQL = new _graphql.GraphQLEnumType({
  name: 'StatementHistoryCategoryEnum',
  description: 'Statement History Category Enum',
  values: StatementHistoryCategoryEnum
});

var StatementHistoryCategoryGroup = {};

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Other.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.Other.value, _StatementHistoryCode.StatementHistoryCodeEnum.BankCredit.value, _StatementHistoryCode.StatementHistoryCodeEnum.BankDebit.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.InternalTransfer.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.LocalIn.value, _StatementHistoryCode.StatementHistoryCodeEnum.LocalOut.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.ExternalTransfer.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.ExternalIn.value, _StatementHistoryCode.StatementHistoryCodeEnum.ExternalOut.value, _StatementHistoryCode.StatementHistoryCodeEnum.ExternalRefund.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.PaymentAndBilling.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.PaymentOut.value, _StatementHistoryCode.StatementHistoryCodeEnum.PaymentRefund.value, _StatementHistoryCode.StatementHistoryCodeEnum.BoletoIn.value, _StatementHistoryCode.StatementHistoryCodeEnum.CronOut.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.ATM.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.AtmOut.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Escrow.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.EscrowRollback.value, _StatementHistoryCode.StatementHistoryCodeEnum.EscrowIn.value, _StatementHistoryCode.StatementHistoryCodeEnum.EscrowOut.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Fee.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.OtherFees.value, _StatementHistoryCode.StatementHistoryCodeEnum.FeeRefund.value, _StatementHistoryCode.StatementHistoryCodeEnum.BoletoFee.value];

StatementHistoryCategoryGroup[StatementHistoryCategoryEnum.Invest.value] = [_StatementHistoryCode.StatementHistoryCodeEnum.BankInvestment.value, _StatementHistoryCode.StatementHistoryCodeEnum.BankInvestmentReturn.value];

var codeToCategory = function codeToCategory(code) {
  var category = StatementHistoryCategoryEnum.Other.value;

  Object.keys(StatementHistoryCategoryEnum).forEach(function (catName) {
    var cat = StatementHistoryCategoryEnum[catName];
    if (!(0, _tools.undefinedOrNull)(StatementHistoryCategoryGroup[cat.value]) && StatementHistoryCategoryGroup[cat.value].indexOf(code) !== -1) {
      category = cat.value;
    }
  });

  return category;
};

exports.StatementHistoryCategoryGroup = StatementHistoryCategoryGroup;
exports.StatementHistoryCategoryEnum = StatementHistoryCategoryEnum;
exports.StatementHistoryCategoryEnumGraphQL = StatementHistoryCategoryEnumGraphQL;
exports.codeToCategory = codeToCategory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIlN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUVudW0iLCJPdGhlciIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJJbnRlcm5hbFRyYW5zZmVyIiwiRXh0ZXJuYWxUcmFuc2ZlciIsIlBheW1lbnRBbmRCaWxsaW5nIiwiQVRNIiwiRXNjcm93IiwiRmVlIiwiSW52ZXN0IiwiU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bUdyYXBoUUwiLCJHcmFwaFFMRW51bVR5cGUiLCJuYW1lIiwidmFsdWVzIiwiU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5R3JvdXAiLCJTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0iLCJCYW5rQ3JlZGl0IiwiQmFua0RlYml0IiwiTG9jYWxJbiIsIkxvY2FsT3V0IiwiRXh0ZXJuYWxJbiIsIkV4dGVybmFsT3V0IiwiRXh0ZXJuYWxSZWZ1bmQiLCJQYXltZW50T3V0IiwiUGF5bWVudFJlZnVuZCIsIkJvbGV0b0luIiwiQ3Jvbk91dCIsIkF0bU91dCIsIkVzY3Jvd1JvbGxiYWNrIiwiRXNjcm93SW4iLCJFc2Nyb3dPdXQiLCJPdGhlckZlZXMiLCJGZWVSZWZ1bmQiLCJCb2xldG9GZWUiLCJCYW5rSW52ZXN0bWVudCIsIkJhbmtJbnZlc3RtZW50UmV0dXJuIiwiY29kZVRvQ2F0ZWdvcnkiLCJjb2RlIiwiY2F0ZWdvcnkiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImNhdE5hbWUiLCJjYXQiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBTUEsK0JBQStCO0FBQ25DQyxTQUFPO0FBQ0xDLFdBQU8sQ0FERjtBQUVMQyxpQkFBYTtBQUZSLEdBRDRCO0FBS25DQyxvQkFBa0I7QUFDaEJGLFdBQU8sQ0FEUztBQUVoQkMsaUJBQWE7QUFGRyxHQUxpQjtBQVNuQ0Usb0JBQWtCO0FBQ2hCSCxXQUFP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NUMsNkJBQTZCMkMsT0FBN0IsQ0FBWjtBQUNBLFFBQUksQ0FBQyw0QkFBZ0I1Qiw4QkFBOEI2QixJQUFJMUMsS0FBbEMsQ0FBaEIsQ0FBRCxJQUE4RGEsOEJBQThCNkIsSUFBSTFDLEtBQWxDLEVBQXlDMkMsT0FBekMsQ0FBaURQLElBQWpELE1BQTJELENBQUMsQ0FBOUgsRUFBaUk7QUFDL0hDLGlCQUFXSyxJQUFJMUMsS0FBZjtBQUNEO0FBQ0YsR0FMRDs7QUFPQSxTQUFPcUMsUUFBUDtBQUNELENBWEQ7O1FBY0V4Qiw2QixHQUFBQSw2QjtRQUNBZiw0QixHQUFBQSw0QjtRQUNBVyxtQyxHQUFBQSxtQztRQUNBMEIsYyxHQUFBQSxjIiwiZmlsZSI6IlN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAyOS8wMy8xOC5cbiAqIEBmbG93XG4gKi9cbmltcG9ydCB7IEdyYXBoUUxFbnVtVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5pbXBvcnQgeyB1bmRlZmluZWRPck51bGwgfSBmcm9tICcuLi90b29scyc7XG5cbmltcG9ydCB7IFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bSB9IGZyb20gJy4vU3RhdGVtZW50SGlzdG9yeUNvZGUnO1xuXG5jb25zdCBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtID0ge1xuICBPdGhlcjoge1xuICAgIHZhbHVlOiAwLFxuICAgIGRlc2NyaXB0aW9uOiAnT3RoZXJzIChzZWUgc3RhdGVtZW50IGRlc2NyaXB0aW9uKScsXG4gIH0sXG4gIEludGVybmFsVHJhbnNmZXI6IHtcbiAgICB2YWx1ZTogMSxcbiAgICBkZXNjcmlwdGlvbjogJ0FjY291bnQgQmFsYW5jZSBUcmFuc2ZlcnMgaW4gc2FtZSBiYW5rJyxcbiAgfSxcbiAgRXh0ZXJuYWxUcmFuc2Zlcjoge1xuICAgIHZhbHVlOiAyLFxuICAgIGRlc2NyaXB0aW9uOiAnQWNjb3VudCBCYWxhbmNlIFRyYW5zZmVycyBpbiBkaWZmZXJlbnQgYmFua3MnLFxuICB9LFxuICBQYXltZW50QW5kQmlsbGluZzoge1xuICAgIHZhbHVlOiAzLFxuICAgIGRlc2NyaXB0aW9uOiAnUGF5bWVudCAvIEJpbGxpbmcgVHJhbnNhY3Rpb25zJyxcbiAgfSxcbiAgQVRNOiB7XG4gICAgdmFsdWU6IDQsXG4gICAgZGVzY3JpcHRpb246ICdBVE0gVHJhbnNhY3Rpb25zJyxcbiAgfSxcbiAgRXNjcm93OiB7XG4gICAgdmFsdWU6IDUsXG4gICAgZGVzY3JpcHRpb246ICdFc2Nyb3cgVHJhbnNhY3Rpb25zJyxcbiAgfSxcbiAgRmVlOiB7XG4gICAgdmFsdWU6IDYsXG4gICAgZGVzY3JpcHRpb246ICdGZWUgVHJhbnNhY3Rpb25zJyxcbiAgfSxcbiAgSW52ZXN0OiB7XG4gICAgdmFsdWU6IDcsXG4gICAgZGVzY3JpcHRpb246ICdJbnZlc3RtZW50IFRyYW5zYWN0aW9ucycsXG4gIH0sXG59O1xuXG5jb25zdCBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtR3JhcGhRTCA9IG5ldyBHcmFwaFFMRW51bVR5cGUoe1xuICBuYW1lOiAnU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bScsXG4gIGRlc2NyaXB0aW9uOiAnU3RhdGVtZW50IEhpc3RvcnkgQ2F0ZWdvcnkgRW51bScsXG4gIHZhbHVlczogU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bSxcbn0pO1xuXG5jb25zdCBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cCA9IHt9O1xuXG5TdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtLk90aGVyLnZhbHVlXSA9IFtcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLk90aGVyLnZhbHVlLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uQmFua0NyZWRpdC52YWx1ZSxcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLkJhbmtEZWJpdC52YWx1ZSxcbl07XG5cblN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUdyb3VwW1N0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUVudW0uSW50ZXJuYWxUcmFuc2Zlci52YWx1ZV0gPSBbXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5Mb2NhbEluLnZhbHVlLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uTG9jYWxPdXQudmFsdWUsXG5dO1xuXG5TdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtLkV4dGVybmFsVHJhbnNmZXIudmFsdWVdID0gW1xuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uRXh0ZXJuYWxJbi52YWx1ZSxcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLkV4dGVybmFsT3V0LnZhbHVlLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uRXh0ZXJuYWxSZWZ1bmQudmFsdWUsXG5dO1xuXG5TdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtLlBheW1lbnRBbmRCaWxsaW5nLnZhbHVlXSA9IFtcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLlBheW1lbnRPdXQudmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5QYXltZW50UmVmdW5kLnZhbHVlLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uQm9sZXRvSW4udmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5Dcm9uT3V0LnZhbHVlLFxuXTtcblxuU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5R3JvdXBbU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bS5BVE0udmFsdWVdID0gW1xuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uQXRtT3V0LnZhbHVlLFxuXTtcblxuU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5R3JvdXBbU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bS5Fc2Nyb3cudmFsdWVdID0gW1xuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uRXNjcm93Um9sbGJhY2sudmFsdWUsXG4gIFN0YXRlbWVudEhpc3RvcnlDb2RlRW51bS5Fc2Nyb3dJbi52YWx1ZSxcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLkVzY3Jvd091dC52YWx1ZSxcbl07XG5cblN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUdyb3VwW1N0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUVudW0uRmVlLnZhbHVlXSA9IFtcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLk90aGVyRmVlcy52YWx1ZSxcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLkZlZVJlZnVuZC52YWx1ZSxcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLkJvbGV0b0ZlZS52YWx1ZSxcbl07XG5cblN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUdyb3VwW1N0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUVudW0uSW52ZXN0LnZhbHVlXSA9IFtcbiAgU3RhdGVtZW50SGlzdG9yeUNvZGVFbnVtLkJhbmtJbnZlc3RtZW50LnZhbHVlLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q29kZUVudW0uQmFua0ludmVzdG1lbnRSZXR1cm4udmFsdWUsXG5dO1xuXG5jb25zdCBjb2RlVG9DYXRlZ29yeSA9IChjb2RlOiBudW1iZXIpID0+IHtcbiAgbGV0IGNhdGVnb3J5ID0gU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bS5PdGhlci52YWx1ZTtcblxuICBPYmplY3Qua2V5cyhTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtKS5mb3JFYWNoKChjYXROYW1lKSA9PiB7XG4gICAgY29uc3QgY2F0ID0gU3RhdGVtZW50SGlzdG9yeUNhdGVnb3J5RW51bVtjYXROYW1lXTtcbiAgICBpZiAoIXVuZGVmaW5lZE9yTnVsbChTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtjYXQudmFsdWVdKSAmJiBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlHcm91cFtjYXQudmFsdWVdLmluZGV4T2YoY29kZSkgIT09IC0xKSB7XG4gICAgICBjYXRlZ29yeSA9IGNhdC52YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjYXRlZ29yeTtcbn07XG5cbmV4cG9ydCB7XG4gIFN0YXRlbWVudEhpc3RvcnlDYXRlZ29yeUdyb3VwLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtLFxuICBTdGF0ZW1lbnRIaXN0b3J5Q2F0ZWdvcnlFbnVtR3JhcGhRTCxcbiAgY29kZVRvQ2F0ZWdvcnksXG59O1xuIl19