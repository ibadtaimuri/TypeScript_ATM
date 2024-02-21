"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("node:readline/promises"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let userId = 'taimuri';
let userPin = 2457;
// Function to take and validate user input
function getUserIdPin() {
    return __awaiter(this, void 0, void 0, function* () {
        let id = null;
        let pin = null;
        while (!id || !pin) {
            // Get username and validate
            id = yield rl.question('Enter UserName: ');
            if (!id) {
                console.error('Username cannot be empty.');
                continue;
            }
            // Get pin and validate
            pin = parseInt(yield rl.question('Enter PIN: '));
            if (isNaN(pin)) {
                console.error('PIN must be a number.');
                continue;
            }
        }
        rl.close();
        return { userId: id, userPin: pin };
    });
}
// Check credentials and handle errors
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId: enteredId, userPin: enteredPin } = yield getUserIdPin();
            if (enteredId === userId && enteredPin === userPin) {
                console.log('Welcome. ', enteredId);
                console.log('Account Number: 0123456789');
                console.log('Branch Code: 1289');
                console.log('Branch Name: XYZ, ABC Road');
            }
            else {
                console.error('Invalid credentials.');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    });
}
main();
