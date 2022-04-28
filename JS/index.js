$(document).ready(function () {
    var i = 1;
    $("#btn2").click(function () {
        $("#myModal").modal();

    });
    function KTten() {
        let kt = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-zA-Z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("*Bắt buộc nhập!!");
            return false;
        }
        if (!kt.test($("#Name").val())) {
            $("#tbName").html("*Viết hoa chữ cái đầu tiên của mỗi từ");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(KTten);

    function KTao() {
        var kt = /^\d*$/;
        if ($("#Ao").val() == "") {
            $("#tbAo").html("* Bắt buộc nhập");
            return false;
        }
        if (!kt.test($("#Ao").val())) {
            $("#tbAo").html("Nhập số từ 1 đến 20");
            return false;
        }
        else {
            var soAo = $("#Ao").val();
            if (soAo < 1 || soAo > 20) {
                $("#tbAo").html("Nhập số từ 1 đến 20");
                return false;
            }
            else {
                $("#tbAo").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(KTao);
    function KTClb() {
        var kt = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-zA-Z]+){1,})(\s\d{1})$/;
        if ($("#CLB").val() == "") {
            $("#tbCLB").html("* Bắt buộc nhập");
            return false;
        }
        if (!kt.test($("#CLB").val())) {
            $("#tbCLB").html("Mỗi kí tự viết hoa và có số ở cuối cùng");
            return false;
        }
        $("#tbCLB").html("*");
        return true;
    }
    $("#CLB").blur(KTClb);
    function KTngay() {
        if ($("#NTT").val() == "") {
            $("#tbNTT").html("*Bắt buộc nhập !!");
            return false;
        }
        var day = new Date($("#NTT").val());
        var today = new Date;
        today.setDate(today.getDate() + 30);
        if (day < today) {
            $("#tbNTT").html("*Nhập ngày sau ngày hiện tại 1 tháng");
            return false;
        }
        $("#tbNgay").html("*");
        return true;
    }
    $("#NTT").blur(KTngay);
    function KTsdt() {
        var sdt = /^0\d{3}\d{3}\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("* Bắt buộc nhập");
            return false;
        }
        if (!sdt.test($("#SDT").val())) {
            $("#tbSDT").html("Nhập theo dạng 0000-000-000");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(KTsdt);
    $("#Save").click(function () {
        if (KTten()==false && KTao()==false && KTClb()==false && KTsdt()==false && KTngay()==false) {
            $("#thongbao").html("Vui lòng nhập đúng và đủ thông tin!");
        }
        else{
        var ten = $("#Name").val();
        var ao = $("#Ao").val();
        var clb = $("#CLB").val();
        var ntt = $("#NTT").val();
        var sdt = $("#SDT").val();
        var add = $("#ADD").val().substring(12);

        var them = "<tr><td>" + (i++) + "</td><td>" + ten + "</td><td>" + ao + "</td><td>" + clb + "</td><td>" + ntt + "</td><td>" + sdt + "</td><td>" + add + "</td></tr>"
        $("#danhSach").append(them);
        $("#myModal").modal("hide");
        return true;
        }
    })

});