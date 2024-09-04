export const isValidPassword = (password: string): boolean => {
    if (password.length < 8) {
        return false;
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_,.?":{}|<>]/.test(password);

    if (!(hasUppercase && hasLowercase && hasNumber && hasSymbol)) {
        return false;
    }

    const commonPasswords = ['password', '12345678', 'qwerty', 'letmein', 'monkey', 'abc123'];
    const commonNames = ['john', 'mary', 'james', 'linda', 'robert', 'michael', 'google', 'facebook'];

    const lowerCasePassword = password.toLowerCase();

    if (commonPasswords.includes(lowerCasePassword) || commonNames.some(name => lowerCasePassword.includes(name))) {
        return false;
    }

    return true;
};
