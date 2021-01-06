const subjectClass = new Subject({
    id: subjectPlusWindow,
    input: subjectInput
})

subjectPlus.addEventListener('click', () => {
    subjectClass.open()
})

subjectCross.addEventListener('click', () => {
    subjectClass.clear()
    subjectClass.close()
})

subjectCreate.addEventListener('click', () => {
    const value = subjectInput.value
    subjectContauner.innerHTML += newSubject(value)
    subjectClass.clear()
    subjectClass.close()
})

subjectDelete.addEventListener('click', () => {
    subjectClass.clear()
})