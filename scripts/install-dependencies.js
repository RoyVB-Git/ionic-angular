const {spawn} = require("child_process");

async function run(executable, args, opts = {}) {
    return new Promise((resolve, reject) => {
        const child = spawn(executable, args, {
            shell: true,
            stdio: ["pipe", process.stdout, process.stderr],
            ...opts,
        });
        child.on("error", reject);
        child.on("exit", (code) => {
            if (code === 0) {
                resolve(code);
            } else {
                const e = new Error('Process exited with error code ' + code);
                e.code = code;
                reject(e);
            }
        });
    });
}


async function installChoco() {
    try {
        const code = await run('powershell', ["-executionpolicy", "unrestricted", "-file", 'install-choco.ps1']);
        process.exit(code);
    } catch (e) {
        console.error(e);
        process.exit(e.code || 1);
    }
}

async function installOpenJdk11() {
    try {
        //const code = await run('choco', ["install", "-y", "openjdk11"]);
        const code = await run('powershell', ["-executionpolicy", "unrestricted", "-file", 'install-openjdk11.ps1']);
        process.exit(code);
    } catch (e) {
        console.error(e);
        process.exit(e.code || 1);
    }
}
