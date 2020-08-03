function tinhDiem() {
    var liet = false;
    var result = 0.0;
    var diem0;
    var text;
    var check;
    var toan, van, ngoaiNgu, mon1, mon2, mon3, khuyenKhich, tb12, diemUuTien;
    toan = document.getElementById("toan").value;
    van = document.getElementById("van").value;
    ngoaiNgu = document.getElementById("ngoaiNgu").value;
    mon1 = document.getElementById("mon1").value;
    mon2 = document.getElementById("mon2").value;
    mon3 = document.getElementById("mon3").value;
    khuyenKhich = document.getElementById("khuyenKhich").value;
    tb12 = document.getElementById("tb12").value;
    diemUuTien = document.getElementById("diemUuTien").value;

    var school = document.getElementById("school").value;
    if (school == "THPT") {
        diem0 = (parseFloat(toan) + parseFloat(van) + parseFloat(ngoaiNgu) + parseFloat(mon1) + parseFloat(mon2) + parseFloat(mon3) + parseFloat(khuyenKhich)) / 4;
        if (toan < 1.1 || van < 1.1 || ngoaiNgu < 1.1 || mon1 < 1.1 || mon2 < 1.1 || mon3 < 1.1) {
            liet = true
        }
    } else {
        diem0 = (parseFloat(toan) + parseFloat(van) + parseFloat(mon1) + parseFloat(mon2) + parseFloat(mon3)) / 3 + parseFloat(khuyenKhich) / 4;
        if (toan < 1.1 || van < 1.1 || mon1 < 1.1 || mon2 < 1.1 || mon3 < 1.1) {
            liet = true
        }
    }
    result = (diem0 * 7 + parseFloat(tb12) * 3) / 10 + parseFloat(diemUuTien);
    if (result > 5 && liet == false) {
        text = "Tốt Nghiệp!";
        check = 1;
    } else {
        text = "Không Tốt Nghiệp!";
        check = 0;
    }

    document.getElementById("ketQuaTotNghiep").innerHTML = text;
    document.getElementById("diemSauKhiTinh").innerHTML = result;
    if (check == 0) {
        alert("Chia buồn với bạn! Chúc bạn ôn tập tốt cho kỳ thi năm sau !")
    } else
        alert("Chúc mừng bạn đã vượt qua kỳ thi tốt nghiệp!")
}