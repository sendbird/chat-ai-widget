const prefixes = ['@raw-', '@use-'];
const duplicates = {};

module.exports = {
  classNameSlug: (hash, title) => {
    let shouldCheckDuplicates = false;
    let className = hash;

    for (let i = 0; i < prefixes.length; i++) {
      if (title.startsWith(prefixes[i])) {
        className = title.replace(prefixes[i], '');
        shouldCheckDuplicates = true;
        break;
      }
    }

    if (shouldCheckDuplicates) {
      if (duplicates[className]) {
        // print error message in shell with bold text..
        console.log(`\n\x1b[1m\x1b[33m[ERROR] Duplicate className: ${className} for ${title}\x1b[0m\n`);
        throw new Error(`Duplicate className: ${className}`);
      } else {
        duplicates[className] = true;
      }
    }

    return className;
  },
};
