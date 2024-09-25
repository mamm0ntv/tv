const fs = require('fs');
const obfuscator = require('javascript-obfuscator');

// Read the code from input.js.
const code = fs.readFileSync('code/input.js', 'utf8');

// Add the anti debug
const antiDebugReady = `${code} 

const antiDebug = () => {
    const isDebuggerPresent = () => {
      return !!process._getActiveRequests().length || !!process._getActiveHandles().length
    }
  
    if (isDebuggerPresent()) {
      console.log('Debugger detected. Exiting...')
      process.exit(0)
    }
  }
  
  const protectAntiDebug = () => {
    const nativeCode = process.binding('natives')
    const original = nativeCode.setImmediate
    const replacement = function() {
      antiDebug()
      return original.apply(this, arguments)
    }
    nativeCode.setImmediate = replacement
  }
  
  protectAntiDebug()
`;

// Obfuscate the code.
const obfuscationResult1 = obfuscator.obfuscate(antiDebugReady, {
    // The obfuscator will rename variables to shorter names.
    compact: true,
    // The obfuscator will flatten control flow.
    controlFlowFlattening: true,
    // The obfuscator will flatten control flow when the function is at least 1 line long.
    controlFlowFlatteningThreshold: 1,
    // The obfuscator will convert numbers to expressions.
    numbersToExpressions: true,
    // The obfuscator will simplify expressions.
    simplify: true,
    // The obfuscator will shuffle the contents of string arrays.
    shuffleStringArray: true,
    // The obfuscator will split strings into multiple parts.
    splitStrings: true,
    // The obfuscator will split string arrays when the array is at least 1 line long.
    stringArrayThreshold: 1,
    // The obfuscator will use unicode escape sequences.
    unicodeEscapeSequence: true,
});

// Obfuscate the code again.
const obfuscationResult = obfuscator.obfuscate(obfuscationResult1, {
  // The obfuscator will rename variables to shorter names.
  compact: true,
  // The obfuscator will flatten control flow.
  controlFlowFlattening: true,
  // The obfuscator will flatten control flow when the function is at least 1 line long.
  controlFlowFlatteningThreshold: 1,
  // The obfuscator will convert numbers to expressions.
  numbersToExpressions: true,
  // The obfuscator will simplify expressions.
  simplify: true,
  // The obfuscator will shuffle the contents of string arrays.
  shuffleStringArray: true,
  // The obfuscator will split strings into multiple parts.
  splitStrings: true,
  // The obfuscator will split string arrays when the array is at least 1 line long.
  stringArrayThreshold: 1,
  // The obfuscator will use unicode escape sequences.
  unicodeEscapeSequence: true,
});

// Add a wrapper around the code to replace the console object.
const finalCode = `
${obfuscationResult.getObfuscatedCode()}
`;

// Import the child_process module
const exec = require('child_process').exec;

// Create the command to compile the code
const command = 'pkg code/output.js -t node14-win-x64'; // Windows

// Execute the command
exec(command, (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        return;
    }

    // Log the output
    console.log(stdout);
});