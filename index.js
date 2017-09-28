var granimInstance = new Granim({
    element: '#granim-bg',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#555555', '#000'],
                ['#aaaaaa', '#555555'],
                ['#dddddd', '#aaaaaa']
            ]
        }
    }
});
