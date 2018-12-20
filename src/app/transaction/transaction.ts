import { Account } from '../account/account';

export class Transaction{
    idtrans : number;
    amountsign : string;
    amount: string;
    type: string;
    accountId: Account;
}