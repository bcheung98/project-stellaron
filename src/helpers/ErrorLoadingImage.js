const ErrorLoadingImage = (e) => {
    e.target.src = `${process.env.REACT_APP_URL}/images/Unknown.png`;
    e.onError = null;
}

export default ErrorLoadingImage;