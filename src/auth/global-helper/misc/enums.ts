/**
 * these statuses are used in different crons;
 * for example pending_anchor with type=deposit in transaction tables processes asset tokenization and adding trust
 */
export enum PaymentStatusEnum {
  incomplete = 'incomplete',
  pending_user_transfer_start = 'pending_user_transfer_start',
  pending_external = 'pending_external',
  pending_anchor = 'pending_anchor',
  pending_anchor_transfer_start = 'pending_anchor_transfer_start',
  anchor_started_withdraw = 'anchor_started_withdraw',
  pending_user = 'pending_user',
  pending_trust = 'pending_trust',
  completed = 'completed',
  disputed = 'disputed',
  too_small = 'too_small',
  too_large = 'too_large',
  no_market = 'no_market',
  error = 'error',
  duplicate = 'duplicate',
  initialize_fee_account_update = 'initialize_fee_account_update', // used when user changes the fee account
  fee_account_updated = 'fee_account_updated', //used when funds from fee transfer are transferred
}

export enum memoTypeEnum {
  id = 'id',
  text = 'text',
  hash = 'hash',
}

export enum paymentTypeEnum {
  deposit = 'deposit',
  withdraw = 'withdraw',
}
export enum NodePositionInsertionMessage {
  'leftIsEmpty' = 'leftIsEmpty',
  'middleIsEmpty' = 'middleIsEmpty',
  'rightIsEmpty' = 'rightIsEmpty',
  'leftIsOccupied' = 'leftIsOccupied',
  'middleIsOccupied' = 'middleIsOccupied',
  'rightIsOccupied' = 'rightIsOccupied',
}

export enum MyFormula {
  leftIsFull = 5,
  middleIsFull = 10,
  rightIsFull = 15
}