/* eslint-disable import/namespace */

import Web3Eth from '../../src/index';
import * as rpcMethodWrappers from '../../src/rpc_method_wrappers';
import {
	estimateGasValidData,
	// estimateGasValidData,
	getBalanceValidData,
	getBlockNumberValidData,
	getBlockTransactionCountValidData,
	getBlockUncleCountValidData,
	getBlockValidData,
	getCodeValidData,
	getFeeHistoryValidData,
	// getCodeValidData,
	// getFeeHistoryValidData,
	getGasPriceValidData,
	getHashRateValidData,
	getPastLogsValidData,
	getStorageAtValidData,
	getTransactionCountValidData,
	getTransactionFromBlockValidData,
	getTransactionReceiptValidData,
	getTransactionValidData,
	getUncleValidData,
	sendSignedTransactionValidData,
	signValidData,
	submitWorkValidData,
	// getPastLogsValidData,
	// getStorageAtValidData,
	// getTransactionCountValidData,
	// getTransactionFromBlockValidData,
	// getTransactionReceiptValidData,
	// getTransactionValidData,
	// getUncleValidData,
	// sendSignedTransactionValidData,
	// signValidData,
	// submitWorkValidData,
} from '../fixtures/web3_eth_methods_with_parameters';

jest.mock('../../src/rpc_method_wrappers');

describe('web3_eth_methods_with_parameters', () => {
	let web3Eth: Web3Eth;

	beforeAll(() => {
		web3Eth = new Web3Eth('http://127.0.0.1:8545');
	});

	describe('should call RPC method with expected parameters', () => {
		describe('only has returnType parameter', () => {
			describe('getHashRate', () => {
				it.each(getHashRateValidData)('returnType: %s', async returnType => {
					await web3Eth.getHashRate(returnType);
					expect(rpcMethodWrappers.getHashRate).toHaveBeenCalledWith(
						web3Eth.web3Context,
						returnType,
					);
				});
			});

			describe('getGasPrice', () => {
				it.each(getGasPriceValidData)('returnType: %s', async returnType => {
					await web3Eth.getGasPrice(returnType);
					expect(rpcMethodWrappers.getGasPrice).toHaveBeenCalledWith(
						web3Eth.web3Context,
						returnType,
					);
				});
			});

			describe('getBlockNumber', () => {
				it.each(getBlockNumberValidData)('returnType: %s', async returnType => {
					await web3Eth.getBlockNumber(returnType);
					expect(rpcMethodWrappers.getBlockNumber).toHaveBeenCalledWith(
						web3Eth.web3Context,
						returnType,
					);
				});
			});
		});

		describe('has multiple parameters', () => {
			describe('has returnType parameter', () => {
				describe('getBalance', () => {
					it.each(getBalanceValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getBalance(...input);
							expect(rpcMethodWrappers.getBalance).toHaveBeenCalledWith(
								web3Eth.web3Context,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getBlock', () => {
					it.each(getBlockValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getBlock(...input);
							expect(rpcMethodWrappers.getBlock).toHaveBeenCalledWith(
								web3Eth.web3Context,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getBlockTransactionCount', () => {
					it.each(getBlockTransactionCountValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getBlockTransactionCount(...input);
							expect(rpcMethodWrappers.getBlockTransactionCount).toHaveBeenCalledWith(
								web3Eth.web3Context,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getBlockUncleCount', () => {
					it.each(getBlockUncleCountValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getBlockUncleCount(...input);
							expect(rpcMethodWrappers.getBlockUncleCount).toHaveBeenCalledWith(
								web3Eth.web3Context,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getUncle', () => {
					it.each(getUncleValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getUncle(...input);
							expect(rpcMethodWrappers.getUncle).toHaveBeenCalledWith(
								web3Eth.web3Context,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getTransaction', () => {
					it.each(getTransactionValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getTransaction(...input);
							expect(rpcMethodWrappers.getTransaction).toHaveBeenCalledWith(
								web3Eth.web3Context,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getTransactionFromBlock', () => {
					it.each(getTransactionFromBlockValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getTransactionFromBlock(...input);
							expect(rpcMethodWrappers.getTransactionFromBlock).toHaveBeenCalledWith(
								web3Eth.web3Context,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getTransactionReceipt', () => {
					it.each(getTransactionReceiptValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getTransactionReceipt(...input);
							expect(rpcMethodWrappers.getTransactionReceipt).toHaveBeenCalledWith(
								web3Eth.web3Context,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getTransactionCount', () => {
					it.each(getTransactionCountValidData)(
						'input: %s\rpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getTransactionCount(...input);
							expect(rpcMethodWrappers.getTransactionCount).toHaveBeenCalledWith(
								web3Eth.web3Context,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('estimateGas', () => {
					it.each(estimateGasValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.estimateGas(...input);
							expect(rpcMethodWrappers.estimateGas).toHaveBeenCalledWith(
								web3Eth.web3Context,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getFeeHistory', () => {
					it.each(getFeeHistoryValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getFeeHistory(...input);
							expect(rpcMethodWrappers.getFeeHistory).toHaveBeenCalledWith(
								web3Eth.web3Context,
								...rpcMethodParameters,
							);
						},
					);
				});
			});

			describe("doesn't have returnType parameter", () => {
				describe('getStorageAt', () => {
					it.each(getStorageAtValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getStorageAt(...input);
							expect(rpcMethodWrappers.getStorageAt).toHaveBeenCalledWith(
								web3Eth.web3Context,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getCode', () => {
					it.each(getCodeValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getCode(...input);
							expect(rpcMethodWrappers.getCode).toHaveBeenCalledWith(
								web3Eth.web3Context,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('sendSignedTransaction', () => {
					it.each(sendSignedTransactionValidData)('input: %s', async input => {
						await web3Eth.sendSignedTransaction(input);
						expect(rpcMethodWrappers.sendSignedTransaction).toHaveBeenCalledWith(
							web3Eth.web3Context,
							input,
						);
					});
				});

				describe('sign', () => {
					it.each(signValidData)('input: %s', async input => {
						await web3Eth.sign(...input);
						expect(rpcMethodWrappers.sign).toHaveBeenCalledWith(
							web3Eth.web3Context,
							...input,
						);
					});
				});

				describe('getPastLogs', () => {
					it.each(getPastLogsValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getPastLogs(input);
							expect(rpcMethodWrappers.getPastLogs).toHaveBeenCalledWith(
								web3Eth.web3Context,
								rpcMethodParameters,
							);
						},
					);
				});

				describe('submitWork', () => {
					it.each(submitWorkValidData)('input: %s', async input => {
						await web3Eth.submitWork(...input);
						expect(rpcMethodWrappers.submitWork).toHaveBeenCalledWith(
							web3Eth.web3Context,
							...input,
						);
					});
				});
			});
		});
	});
});