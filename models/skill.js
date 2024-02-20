const skills = [
    { name: "JS", time: 2, proficiency: 7 },
    { name: "CSS", time: 2, proficiency: 5 },
    { name: "Python", time: 2, proficiency: 7 },
    { name: "Java", time: 1, proficiency: 5 },
]

function getAll() {
    return skills;
}

function getOne(name) {
    return skills.find(skill => skill.name === name)
}

module.exports = {
    getAll,
    getOne
}