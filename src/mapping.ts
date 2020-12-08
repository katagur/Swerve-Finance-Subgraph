import { BigInt } from "@graphprotocol/graph-ts"
import {
  Vyper_contract,
  Transfer,
  Approval,
  UpdateMiningParameters,
  SetMinter,
  SetAdmin
} from "../generated/Vyper_contract/Vyper_contract"
import { _Transfer, _Approval, _UpdateMiningParameters } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let entity = _Transfer.load(event.params._value.toHex())

  if (entity == null) {
    entity = new _Transfer(event.params._value.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity._from = event.params._from
  entity._to = event.params._to
  entity._value = event.params._value
  entity.save()
}

export function handleApproval(event: Approval): void {
  let entity = _Approval.load(event.params._value.toHex())

  if (entity == null) {
    entity = new _Approval(event.params._value.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity._owner = event.params._owner
  entity._spender = event.params._spender
  entity._value = event.params._value
  entity.save()
}

export function handleUpdateMiningParameters(
  event: UpdateMiningParameters
): void {
  let entity = _UpdateMiningParameters.load(event.params.rate.toHex())

  if (entity == null) {
    entity = new _UpdateMiningParameters(event.params.rate.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.time = event.params.time
  entity.rate = event.params.rate
  entity.supply = event.params.supply
  entity.save()
}

export function handleSetMinter(event: SetMinter): void {}

export function handleSetAdmin(event: SetAdmin): void {}
