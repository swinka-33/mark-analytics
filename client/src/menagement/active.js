const subjectClass = new Subject({
    input: subjectInput,
    comment: subjectComment
})

const subjectRout = new FastRouter({
    button: subjectPlus,
    index: 2,
    arr: ROUTER,
    hash: '/NewSubject'
})

const subjectBannerClass = new Banner({
    id: subjectBanner,
    time: 3000
})

const newSubjectFun = new newSubject

// debugger;
document.getElementById('subject-create').addEventListener('click', () => {
    if(subjectInput.value !== '') {
        const value = subjectInput.value
        subjectContauner.innerHTML += newSubjectFun.render(value)
        subjectClass.clear()
        subjectBannerClass.open()
        setTimeout(() => {
            subjectBannerClass.close()
        }, subjectBannerClass.time)
    }
})

subjectDelete.addEventListener('click', () => {
    subjectClass.clear()
})

subjectRout.rout()