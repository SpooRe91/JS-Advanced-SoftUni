function words(str) {
    let regex = /\w+/g;

    console.log(str.toUpperCase()
        .match(regex)
        .join(','));
}
words('Hi, how are you?')