function solve(obj) {
    if (obj.dizziness !== false) {
        let neededWater = 0.1 * obj.experience * obj.weight;
        obj.levelOfHydrated += neededWater;
        obj.dizziness = false;
    }
    return obj;
}
solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
)F