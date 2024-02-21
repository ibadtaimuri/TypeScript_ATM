import * as readline from 'node:readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let userId = 'taimuri';
let userPin = 2457;

// Function to take and validate user input
async function getUserIdPin(): Promise<{ userId: string; userPin: number }> {
    let id: string | null = null;
    let pin: number | null = null;

    while (!id || !pin) {
        // Get username and validate
        id = await rl.question('Enter UserName: ');
        if (!id) {
            console.error('Username cannot be empty.');
            continue;
        }

        // Get pin and validate
        pin = parseInt(await rl.question('Enter PIN: '));
        if (isNaN(pin)) {
            console.error('PIN must be a number.');
            continue;
        }
    }

    rl.close();
    return { userId: id, userPin: pin };
}

// Check credentials and handle errors
async function main() {
    try {
        const { userId: enteredId, userPin: enteredPin } = await getUserIdPin();
        if (enteredId === userId && enteredPin === userPin) {
            console.log('Welcome. ', enteredId);
            console.log('Account Number: 0123456789');
            console.log('Branch Code: 1289');
            console.log('Branch Name: XYZ, ABC Road');
        } else {
            console.error('Invalid credentials.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

main();