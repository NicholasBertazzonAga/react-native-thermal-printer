import { NativeModules } from 'react-native';
const {
  ThermalPrinterModule
} = NativeModules;
let defaultConfig = {
  macAddress: '',
  ip: '192.168.192.168',
  port: 9100,
  payload: '',
  autoCut: true,
  openCashbox: false,
  mmFeedPaper: 20,
  printerDpi: 203,
  printerWidthMM: 80,
  printerNbrCharactersPerLine: 42,
  timeout: 30000
};

const getConfig = args => {
  return Object.assign({}, defaultConfig, args);
};

const printTcpRaw = async args => {
  const {
    ip,
    port,
    message,
    timeout
  } = Object.assign({}, {
    ip: '',
    port: 9100,
    timeout: 30000,
    message: []
  }, args);
  await ThermalPrinterModule.printTcpRaw(ip, port, message, timeout);
};

const printTcp = async args => {
  const {
    ip,
    port,
    payload,
    autoCut,
    openCashbox,
    mmFeedPaper,
    printerDpi,
    printerWidthMM,
    printerNbrCharactersPerLine,
    timeout
  } = getConfig(args);
  await ThermalPrinterModule.printTcp(ip, port, payload, autoCut, openCashbox, mmFeedPaper, printerDpi, printerWidthMM, printerNbrCharactersPerLine, timeout);
};

const printBluetooth = args => {
  const {
    macAddress,
    payload,
    autoCut,
    openCashbox,
    mmFeedPaper,
    printerDpi,
    printerWidthMM,
    printerNbrCharactersPerLine
  } = getConfig(args);
  return ThermalPrinterModule.printBluetooth(macAddress, payload, autoCut, openCashbox, mmFeedPaper, printerDpi, printerWidthMM, printerNbrCharactersPerLine);
};

const getBluetoothDeviceList = () => {
  return ThermalPrinterModule.getBluetoothDeviceList();
};

export default {
  printTcp,
  printTcpRaw,
  printBluetooth,
  defaultConfig,
  getBluetoothDeviceList
};
//# sourceMappingURL=index.js.map