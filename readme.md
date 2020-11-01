# Yêu cầu
``Nodejs: 14.15.0``

# Cài đặt:
``npm install randexp cypress``

# Sử dụng: 
``npx cypress open``

# Giải thích
## Kiểm thử ô nhập Tên đăng nhập:
- **Điều kiện: Độ dài tên đăng nhập nằm trong khoảng lớn hơn 5 kí tự đến dưới 20 kí tự.**
    |                4 |       5      |            |      20      | 21               |
    |-----------------:|:------------:|------------|:------------:|------------------|
    | Lớp không hợp lệ | Giá trị biên | Lớp hợp lệ | Giá trị biên | Lớp không hợp lệ |

- **Điều kiện: Độ dài tên đăng nhập chỉ bao gồm chữ và số.**
    <table>
        <tbody>
            <tr style="border: 1px solid black">
                <td rowspan=4>Chỉ chứa chữ cái và số</td>
                <td rowspan=2 style="border: 1px solid black">Chỉ chứa chữ cái</td>
            </tr>
            <tr>
            </tr>
            <tr>
                <td rowspan=2 style="border: 1px solid black">Chỉ chứa số</td>
            </tr>
            <tr >
            </tr>
            <tr >
                <td rowspan=4 style="border: 1px solid black">Chứa các kí tự đặc biệt</td>
                <td rowspan=2></td>
            </tr>
        </tbody>
    </table>

- **Điều kiện: Độ dài tên đăng nhập không được có chữ viết hoa.**
    <table style="border: 1px solid black">
        <tr>
            <td class="tg-c3ow">Tất cả các chữ cái đều viết thường</td>
        </tr>
        <tr>
            <td class="tg-c3ow">Chứa chữ cái viết hoa</td>
        </tr>
    </table>

- **Điều kiện: Độ dài tên đăng nhập không được có dấu.**
    <table style="border: 1px solid black">
        <tr>
            <td class="tg-c3ow">Tất cả các chữ cái đều viết không dấu</td>
        </tr>
        <tr>
            <td class="tg-c3ow">Chứa chữ cái viết có dấu</td>
        </tr>
    </table>

- **Điều kiện: Không sử dụng tên đăng nhập đã tồn tại.**
    <table style="border: 1px solid black">
        <tr>
            <td class="tg-c3ow">Tên đăng nhập mới</td>
        </tr>
        <tr>
            <td class="tg-c3ow">Tên đăng nhập đã được sử dụng</td>
        </tr>
    </table>

## Kiểm thử ô nhập Số điện thoại:
- **Điều kiện: Số điện thoại phải đúng định dạng (bắt đầu bằng số 0 và có đúng 10 chữ số).**
    <table style="border: 1px solid black">
        <tr>
            <td class="tg-c3ow">Đúng định dạng</td>
        </tr>
        <tr>
            <td class="tg-c3ow">Sai định dạng</td>
        </tr>
    </table>

- **Điều kiện: Số điện thoại chưa được sử dụng.**
    <table style="border: 1px solid black">
        <tr>
            <td class="tg-c3ow">Số điện thoại mới</td>
        </tr>
        <tr>
            <td class="tg-c3ow">Số điện thoại đã được sử dụng</td>
        </tr>
    </table>

## Kiểm thử ô nhập Email:
- **Điều kiện: Email phải đúng định dạng.**
    <table style="border: 1px solid black">
        <tr>
            <td class="tg-c3ow">Đúng định dạng</td>
        </tr>
        <tr>
            <td class="tg-c3ow">Sai định dạng</td>
        </tr>
    </table>

- **Điều kiện: Email chưa được sử dụng.**
    <table style="border: 1px solid black">
        <tr>
            <td class="tg-c3ow">Email mới</td>
        </tr>
        <tr>
            <td class="tg-c3ow">Email đã được sử dụng</td>
        </tr>
    </table>

## Kiểm thử ô nhập Mật khẩu:
- **Điều kiện: Mật khẩu phải có từ 6 kí tự trở lên.**
    <table style="border: 1px solid black">
        <tr>
            <td class="tg-c3ow">Có 5 kí tự trở xuống</td>
        </tr>
        <tr>
            <td class="tg-c3ow">Có 6 kí tự trở lên</td>
        </tr>
    </table>

- **Điều kiện: Mật khẩu phải chứa kí tự viết hoa.**
    <table style="border: 1px solid black">
        <tr>
            <td class="tg-c3ow">Có kí tự viết hoa</td>
        </tr>
        <tr>
            <td class="tg-c3ow">Không có kí tự viết hoa</td>
        </tr>
    </table>

- **Điều kiện: Mật khẩu phải chứa kí tự đặc biệt.**
    <table style="border: 1px solid black">
        <tr>
            <td class="tg-c3ow">Có kí tự đặc biệt</td>
        </tr>
        <tr>
            <td class="tg-c3ow">Không có kí tự đặc biệt</td>
        </tr>
    </table>

- **Điều kiện: Mật khẩu phải chứa kí tự chữ số.**
    <table style="border: 1px solid black">
        <tr>
            <td class="tg-c3ow">Có kí tự chữ số</td>
        </tr>
        <tr>
            <td class="tg-c3ow">Không có kí tự chữ số</td>
        </tr>
    </table>

- **Điều kiện: Mật khẩu phải không được là các mật khẩu phổ biến.**
    <table style="border: 1px solid black">
        <tr>
            <td class="tg-c3ow">Mật khẩu phải không là các mật khẩu phổ biến</td>
        </tr>
        <tr>
            <td class="tg-c3ow">Mật khẩu phổ biến</td>
        </tr>
    </table>

## Kiểm thử ô tích Đồng ý điều khoản:
- **Điều kiện: Để đăng kí thành công, ô Đồng ý điều khoản phải được tích.**
    <table style="border: 1px solid black">
        <tr>
            <td class="tg-c3ow">Có tích</td>
        </tr>
        <tr>
            <td class="tg-c3ow">Không tích</td>
        </tr>
    </table>
