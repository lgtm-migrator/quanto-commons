'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Lucas Teske on 02/05/17.
 * 
 */

exports.default = {
  // region Public Use
  InternalServerError: 'INTERNAL_SERVER_ERROR',
  NotFound: 'NOT_FOUND',
  EmailAlreadyInUse: 'EMAIL_ALREADY_IN_USE',
  NoDataAvailable: 'NO_DATA_AVAILABLE',
  InvalidLoginInformation: 'INVALID_LOGIN_INFORMATION',
  NotLogged: 'NOT_LOGGED',
  AlreadyExists: 'ALREADY_EXISTS',
  PermissionDenied: 'PERMISSION_DENIED',
  InvalidTokenType: 'INVALID_TOKEN_TYPE',
  InvalidFieldData: 'INVALID_FIELD_DATA',
  AlreadyClient: 'ALREADY_CLIENT',
  AlreadyPaid: 'ALREADY_PAID',
  PaymentError: 'PAYMENT_ERROR',
  InsufficientFunds: 'INSUFFICIENT_FUNDS',
  BankingSystemOffline: 'BANKING_SYSTEM_OFFLINE',
  OutdatedAPI: 'OUTDATED_API',
  BankNotSupported: 'BANK_NOT_SUPPORTED',
  VaultSystemOffline: 'VAULT_SYSTEM_OFFLINE',
  ServerIsBusy: 'SERVER_IS_BUSY',
  Revoked: 'REVOKED',
  AlreadySigned: 'ALREADY_SIGNED',
  Rejected: 'REJECTED',
  OperationNotSupported: 'OPERATION_NOT_SUPPORTED',
  GraphQLError: 'GRAPHQL_ERROR',
  OperationLimitExceeded: 'OPERATION_LIMIT_EXCEEDED',
  InvalidTransactionDate: 'INVALID_TRANSACTION_DATE',
  BoletoCreationNotEnabled: 'BOLETO_CREATION_NOT_ENABLED',
  BoletoOurNumberExausted: 'BOLETO_OUR_NUMBER_EXAUSTED',
  NotImplemented: 'NOT_IMPLEMENTED',
  // endregion

  // region Internal Use - Don't worry about these if you're a partner.
  EverythingIsTerrible: 'EVERYTHING_IS_TERRIBLE',
  QuantoInternalError: 'QUANTO_INTERNAL_ERROR',
  RoutingSystemOffline: 'ROUTING_SYSTEM_OFFLINE',
  QITSystemOffline: 'QIT_SYSTEM_OFFLINE',
  TargetConnectionError: 'CONNECTION_ERROR',
  VaulterIsDead: 'VAULTER_IS_DEAD',
  SynchronizationError: 'SYNCHRONIZATION_ERROR',
  RoutingError: 'ROUTING_ERROR',
  // endregion

  _valueToKey: function _valueToKey(value) {
    var keys = Object.keys(this);
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (this[k] === value) {
        return k;
      }
    }

    return null;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvRXJyb3JDb2Rlcy5qcyJdLCJuYW1lcyI6WyJJbnRlcm5hbFNlcnZlckVycm9yIiwiTm90Rm91bmQiLCJFbWFpbEFscmVhZHlJblVzZSIsIk5vRGF0YUF2YWlsYWJsZSIsIkludmFsaWRMb2dpbkluZm9ybWF0aW9uIiwiTm90TG9nZ2VkIiwiQWxyZWFkeUV4aXN0cyIsIlBlcm1pc3Npb25EZW5pZWQiLCJJbnZhbGlkVG9rZW5UeXBlIiwiSW52YWxpZEZpZWxkRGF0YSIsIkFscmVhZHlDbGllbnQiLCJBbHJlYWR5UGFpZCIsIlBheW1lbnRFcnJvciIsIkluc3VmZmljaWVudEZ1bmRzIiwiQmFua2luZ1N5c3RlbU9mZmxpbmUiLCJPdXRkYXRlZEFQSSIsIkJhbmtOb3RTdXBwb3J0ZWQiLCJWYXVsdFN5c3RlbU9mZmxpbmUiLCJTZXJ2ZXJJc0J1c3kiLCJSZXZva2VkIiwiQWxyZWFkeVNpZ25lZCIsIlJlamVjdGVkIiwiT3BlcmF0aW9uTm90U3VwcG9ydGVkIiwiR3JhcGhRTEVycm9yIiwiT3BlcmF0aW9uTGltaXRFeGNlZWRlZCIsIkludmFsaWRUcmFuc2FjdGlvbkRhdGUiLCJCb2xldG9DcmVhdGlvbk5vdEVuYWJsZWQiLCJCb2xldG9PdXJOdW1iZXJFeGF1c3RlZCIsIk5vdEltcGxlbWVudGVkIiwiRXZlcnl0aGluZ0lzVGVycmlibGUiLCJRdWFudG9JbnRlcm5hbEVycm9yIiwiUm91dGluZ1N5c3RlbU9mZmxpbmUiLCJRSVRTeXN0ZW1PZmZsaW5lIiwiVGFyZ2V0Q29ubmVjdGlvbkVycm9yIiwiVmF1bHRlcklzRGVhZCIsIlN5bmNocm9uaXphdGlvbkVycm9yIiwiUm91dGluZ0Vycm9yIiwiX3ZhbHVlVG9LZXkiLCJ2YWx1ZSIsImtleXMiLCJPYmplY3QiLCJpIiwibGVuZ3RoIiwiayJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7a0JBS2U7QUFDYjtBQUNBQSx1QkFBcUIsdUJBRlI7QUFHYkMsWUFBVSxXQUhHO0FBSWJDLHFCQUFtQixzQkFKTjtBQUtiQyxtQkFBaUIsbUJBTEo7QUFNYkMsMkJBQXlCLDJCQU5aO0FBT2JDLGFBQVcsWUFQRTtBQVFiQyxpQkFBZSxnQkFSRjtBQVNiQyxvQkFBa0IsbUJBVEw7QUFVYkMsb0JBQWtCLG9CQVZMO0FBV2JDLG9CQUFrQixvQkFYTDtBQVliQyxpQkFBZSxnQkFaRjtBQWFiQyxlQUFhLGNBYkE7QUFjYkMsZ0JBQWMsZUFkRDtBQWViQyxxQkFBbUIsb0JBZk47QUFnQmJDLHdCQUFzQix3QkFoQlQ7QUFpQmJDLGVBQWEsY0FqQkE7QUFrQmJDLG9CQUFrQixvQkFsQkw7QUFtQmJDLHNCQUFvQixzQkFuQlA7QUFvQmJDLGdCQUFjLGdCQXBCRDtBQXFCYkMsV0FBUyxTQXJCSTtBQXNCYkMsaUJBQWUsZ0JBdEJGO0FBdUJiQyxZQUFVLFVBdkJHO0FBd0JiQyx5QkFBdUIseUJBeEJWO0FBeUJiQyxnQkFBYyxlQXpCRDtBQTBCYkMsMEJBQXdCLDBCQTFCWDtBQTJCYkMsMEJBQXdCLDBCQTNCWDtBQTRCYkMsNEJBQTBCLDZCQTVCYjtBQTZCYkMsMkJBQXlCLDRCQTdCWjtBQThCYkMsa0JBQWdCLGlCQTlCSDtBQStCYjs7QUFFQTtBQUNBQyx3QkFBc0Isd0JBbENUO0FBbUNiQyx1QkFBcUIsdUJBbkNSO0FBb0NiQyx3QkFBc0Isd0JBcENUO0FBcUNiQyxvQkFBa0Isb0JBckNMO0FBc0NiQyx5QkFBdUIsa0JBdENWO0FBdUNiQyxpQkFBZSxpQkF2Q0Y7QUF3Q2JDLHdCQUFzQix1QkF4Q1Q7QUF5Q2JDLGdCQUFjLGVBekNEO0FBMENiOztBQUVBQyxhQTVDYSx1QkE0Q0RDLEtBNUNDLEVBNENjO0FBQ3pCLFFBQU1DLE9BQU9DLE9BQU9ELElBQVAsQ0FBWSxJQUFaLENBQWI7QUFDQSxTQUFLLElBQUlFLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsS0FBS0csTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDO0FBQ3BDLFVBQU1FLElBQUlKLEtBQUtFLENBQUwsQ0FBVjtBQUNBLFVBQUksS0FBS0UsQ0FBTCxNQUFZTCxLQUFoQixFQUF1QjtBQUNyQixlQUFPSyxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPLElBQVA7QUFDRDtBQXREWSxDIiwiZmlsZSI6IkVycm9yQ29kZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTHVjYXMgVGVza2Ugb24gMDIvMDUvMTcuXG4gKiBAZmxvd1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gcmVnaW9uIFB1YmxpYyBVc2VcbiAgSW50ZXJuYWxTZXJ2ZXJFcnJvcjogJ0lOVEVSTkFMX1NFUlZFUl9FUlJPUicsXG4gIE5vdEZvdW5kOiAnTk9UX0ZPVU5EJyxcbiAgRW1haWxBbHJlYWR5SW5Vc2U6ICdFTUFJTF9BTFJFQURZX0lOX1VTRScsXG4gIE5vRGF0YUF2YWlsYWJsZTogJ05PX0RBVEFfQVZBSUxBQkxFJyxcbiAgSW52YWxpZExvZ2luSW5mb3JtYXRpb246ICdJTlZBTElEX0xPR0lOX0lORk9STUFUSU9OJyxcbiAgTm90TG9nZ2VkOiAnTk9UX0xPR0dFRCcsXG4gIEFscmVhZHlFeGlzdHM6ICdBTFJFQURZX0VYSVNUUycsXG4gIFBlcm1pc3Npb25EZW5pZWQ6ICdQRVJNSVNTSU9OX0RFTklFRCcsXG4gIEludmFsaWRUb2tlblR5cGU6ICdJTlZBTElEX1RPS0VOX1RZUEUnLFxuICBJbnZhbGlkRmllbGREYXRhOiAnSU5WQUxJRF9GSUVMRF9EQVRBJyxcbiAgQWxyZWFkeUNsaWVudDogJ0FMUkVBRFlfQ0xJRU5UJyxcbiAgQWxyZWFkeVBhaWQ6ICdBTFJFQURZX1BBSUQnLFxuICBQYXltZW50RXJyb3I6ICdQQVlNRU5UX0VSUk9SJyxcbiAgSW5zdWZmaWNpZW50RnVuZHM6ICdJTlNVRkZJQ0lFTlRfRlVORFMnLFxuICBCYW5raW5nU3lzdGVtT2ZmbGluZTogJ0JBTktJTkdfU1lTVEVNX09GRkxJTkUnLFxuICBPdXRkYXRlZEFQSTogJ09VVERBVEVEX0FQSScsXG4gIEJhbmtOb3RTdXBwb3J0ZWQ6ICdCQU5LX05PVF9TVVBQT1JURUQnLFxuICBWYXVsdFN5c3RlbU9mZmxpbmU6ICdWQVVMVF9TWVNURU1fT0ZGTElORScsXG4gIFNlcnZlcklzQnVzeTogJ1NFUlZFUl9JU19CVVNZJyxcbiAgUmV2b2tlZDogJ1JFVk9LRUQnLFxuICBBbHJlYWR5U2lnbmVkOiAnQUxSRUFEWV9TSUdORUQnLFxuICBSZWplY3RlZDogJ1JFSkVDVEVEJyxcbiAgT3BlcmF0aW9uTm90U3VwcG9ydGVkOiAnT1BFUkFUSU9OX05PVF9TVVBQT1JURUQnLFxuICBHcmFwaFFMRXJyb3I6ICdHUkFQSFFMX0VSUk9SJyxcbiAgT3BlcmF0aW9uTGltaXRFeGNlZWRlZDogJ09QRVJBVElPTl9MSU1JVF9FWENFRURFRCcsXG4gIEludmFsaWRUcmFuc2FjdGlvbkRhdGU6ICdJTlZBTElEX1RSQU5TQUNUSU9OX0RBVEUnLFxuICBCb2xldG9DcmVhdGlvbk5vdEVuYWJsZWQ6ICdCT0xFVE9fQ1JFQVRJT05fTk9UX0VOQUJMRUQnLFxuICBCb2xldG9PdXJOdW1iZXJFeGF1c3RlZDogJ0JPTEVUT19PVVJfTlVNQkVSX0VYQVVTVEVEJyxcbiAgTm90SW1wbGVtZW50ZWQ6ICdOT1RfSU1QTEVNRU5URUQnLFxuICAvLyBlbmRyZWdpb25cblxuICAvLyByZWdpb24gSW50ZXJuYWwgVXNlIC0gRG9uJ3Qgd29ycnkgYWJvdXQgdGhlc2UgaWYgeW91J3JlIGEgcGFydG5lci5cbiAgRXZlcnl0aGluZ0lzVGVycmlibGU6ICdFVkVSWVRISU5HX0lTX1RFUlJJQkxFJyxcbiAgUXVhbnRvSW50ZXJuYWxFcnJvcjogJ1FVQU5UT19JTlRFUk5BTF9FUlJPUicsXG4gIFJvdXRpbmdTeXN0ZW1PZmZsaW5lOiAnUk9VVElOR19TWVNURU1fT0ZGTElORScsXG4gIFFJVFN5c3RlbU9mZmxpbmU6ICdRSVRfU1lTVEVNX09GRkxJTkUnLFxuICBUYXJnZXRDb25uZWN0aW9uRXJyb3I6ICdDT05ORUNUSU9OX0VSUk9SJyxcbiAgVmF1bHRlcklzRGVhZDogJ1ZBVUxURVJfSVNfREVBRCcsXG4gIFN5bmNocm9uaXphdGlvbkVycm9yOiAnU1lOQ0hST05JWkFUSU9OX0VSUk9SJyxcbiAgUm91dGluZ0Vycm9yOiAnUk9VVElOR19FUlJPUicsXG4gIC8vIGVuZHJlZ2lvblxuXG4gIF92YWx1ZVRvS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrID0ga2V5c1tpXTtcbiAgICAgIGlmICh0aGlzW2tdID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbn07XG4iXX0=