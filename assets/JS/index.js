const skillCheckList = document.querySelector('#skill-check-list');
const progressBar = document.querySelector('#converter-progress-bar');
skillCheckList.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        const checkedSkills = document.querySelectorAll('input[type="checkbox"]:checked');
        const progress = calculateProgress(checkedSkills.length);
        const progressBarColor = getProgressBarColor(progress)
        progressBar.classList.remove(progressBar.classList[1]);
        progressBar.classList.add(progressBarColor);
        progressBar.style.width = `${progress}%`;
        progressBar.textContent = `${parseInt(progress)}%`;
    }
});

function calculateProgress(allCheckedSkills) {
    return (allCheckedSkills / 26) * 100;
}

function getProgressBarColor(progress) {
    if (progress > 0 && progress < 50) {
        return 'bg-danger';
    } else if (progress >= 50 && progress < 75) {
        return 'bg-warning';
    }
    return 'bg-success';
}