// คล้ายๆการใช้ Loop แต่ทำจากหลังไปหน้า (ไป set ค่า แล้วค่อย Return กลับมา)

function FacRecursive(x) {
    if(x > 0) {
        return x * FacRecursive(--x);
    }
    return 1;
}

console.log(`${FacRecursive(5)}`);