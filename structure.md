# CẤU TRÚC ĐƯỢC SỬ DỤNG TRONG PROJECT

# I. Mô hình được sử dụng trong project.

Mô hình được sử dụng trong project được tuỳ biến theo mô hình `MVC`. Đó là mô hình: `MRSCV`. Chúng tôi đã thêm `RS` vào giữa `MVC`. Cụ thể như sau:
###1. M - Model:
- Model: là một class(Object) chỉ chịu trách nhiệm chứa các schema, table và các base query để kết nối đến database. Chúng tôi không viết lệnh query trong các class model. Mà sẽ viết trong Repository(R)
###2. R - Repository:
- Repository: là class(Object) sử dụng các model để tạo ra các query thao tác với database.
- Vì sao chúng tôi lại không sử dụng model để viết trực tiếp các query. Bởi vì nếu như thế sẽ dẫn đến bị trùng lặp code.
###3. S - Service:
- Service: là class(Object) là nơi sẽ xử lý các logic của controller.<br>
Khi cần thao tác với database sẽ gọi Repository để thao tác với database.<br>
Bình thường chúng ta sẽ xử lý các logic trực tiếp trong controller.<br> 
Nhưng như thế khi có những logic trùng lặp sẽ dẫn đến khó khăn.<br>
Vì thế chúng tôi sẽ xử dụng Service để xử lý logic thay cho controller. 
###4. C - Controller:
- Controller. là class(Object) là nơi sẽ tiếp nhận các request từ client hoặc từ view sau đó sẽ gọi Service xử lý logic cần thiết. <br>
 Sau đó sẽ trả kết quả cho Controller.<br> 
 Từ kết quả đó Controller sẽ trả dữ liệu cho client hoặc view.<br>
 
###5. V - View
- Hiện nay chúng tôi sẽ sử dụng Client - Server vì thế View chúng tôi sẽ không xử lý tại project này. <br>

## Sơ đồ mô hình: 
https://www.lucidchart.com/invitations/accept/c66ce9c0-dbb8-46f1-b3d6-d7a80b6c56ac
# II. Cấu trúc thư mục/file xử dụng trong project

1 - `package.json và package-lock.json`
- Chứa các cài đặt, khai báo các third package cài đặt trong project.

2 - `knexfile.json`
- Khai báo connection đến database mysql.
- Dùng để chạy các câu lệnh migration database hoặc seeder.

3 - `.env.example, .env.staging, .env.product`
- Khai báo các biến môi trường khi deploy hoặc run project.
    + `.env.example` được dùng ở môi trường local hoặc môi trường develop.
    + `.env.staging` được dùng ở môi trường staging.
    + `.env.product` được dùng ở môi trường production.
- Khi run project thì project sẽ dùng biến môi trường của file `.env` vì thế khi run project ta cần tạo file `.env` từ 1 trong các file trên tương ứng với từng môi trường.

4 - `app.js`
- khi run app thì sẽ run file `app.js` đầu tiên. Nó sẽ load tất cả các file trong folder `config`.

5 - `Folder config`
- Folder config chứa các file config ban đầu của project. Có các file config mặc định như sau:

    5.1 - `001app.js`
    - Chứa các config để khởi tạo 1 server nodejs.
    
    5.2 - `002database.js`
    - Chứa các cài đặt về database. Khởi tạo các connect hoặc khai báo các thông tin về server database.
    - Mặc định đang khai báo các thông tin connection đến mysql.
    
    5.3 - `003locale.js`
    - Chứa các cài đặt về đa ngôn ngữ.
    
    5.4 - `004logs.js`  
    - Chưa các cài đặt về log trong project.
    
    5.5 - `005routes.js`
    - Dùng để khai báo các route được sử dụng trong project. Chú ý: `Chỉ khai báo route chung. Các router cụ thể sẽ được khai báo trong thư mục routes`.
    
    5.6 - `006view.js`
    - Dùng để cài đặt các view engine được sử dụng trong project.
    
    5.7 - `007socket.js`
    - Dùng để cài đặt để khởi tạo socket.io.
    
    5.8 - `999error.js`
    - Cài đặt error khi hệ thống gặp lỗi hoặc server error.
    
    5.9 - `cronjob.js`
    - Cài đặt để run các cronjob được khai báo trong thư mục `cronjob`.
    
    5.10 - `globals.js`
    - Khai báo các `functions` hoặc `variables` được sử dụng global trong hệ thống.
    
    5.11 - `index.js`
    - Khai báo các variable config cần thiết cho dự án.
    
    5.12 - `redis.js`
    - Khai báo cài đặt để connect đến server redis.
    
6 - `Folder app`
- Folder này sẽ chưa toàn bộ code xử lý của project. Bao gồm nhận dữ liệu request từ routes, xử lý logic, thao tác database đều được xử lý tại đây.
    
    6.1 `Folder Controllers`
    - Chứa các class `controller`.
        
        6.1.1 - `Folder Http`
        - Chứa các `controller` dùng để xử lý các request sử dụng phương thức HTTP request (GET, POST, PUT, DELETE v.v).
        
        6.1.2 - `Folder Ws`
        - Chứa các `controller` dùng để xử lý các request sử dụng phương thức websocket. (Realtime function).
        
        6.1.3 - `Controller.js`
        - Đây là 1 class chung mà các class controller khác đều `extends` class này để xử lý các phương thức dùng chung.
        - Ở class này đã khai báo các response thường được sử dụng. Hiện tại mới phát triển cho các controller sử dụng HTTP request.
         
    6.2 - `Folder Events`
    - Chứa các xử lý về Event Emitter.
     
    6.3 - `Folder Exceptions`
    - Chứa các khai báo về Handle exception.
    
    6.3 - `Folder Helpers`
    - Chứa các helper thường dùng trong project. Hiện tại các helper mặc định sau:
    
        6.3.1 - `error.js`
        - Chứa các mã lỗi response cho client.
        
        6.3.2 - `index.js`
        - Chứa các helper khác. Developer có thể viết vào helper này.
        
        6.3.3 - `RedisHelper.js`
        - Đây là Helper để xử lý việc save cache data.
        
        6.3.4 - `ValidatorHelper.js`
        - Đây là Helper để handle các lỗi validator được khai báo ở thư muc `Validators`.
        
    6.4 - `Folder Middlewares`
    - Chứa các middlewares của project. Project đã cung cấp 1 middleware mặc định đó là:
    
        6.4.1 - `Authentication.js`
        - Đây class có 3 phương thức Authentication mặc định: 
            - `auth`: Middleware này check user đã authentication thành công.
            - `noAuth`: Middleware này check user hoặc không authentication hoặc đã authentication thành công.
            - `authAdmin`: Middelware này check user authentication phải là admin không.
            
    6.5 - `Folder Models`
    - Chứa các khai báo class model dùng để connect và thao tác với database.
    - Project dùng package Objection để tạo ra các class model.
    - Mỗi table trong database đều phải có 1 class model thì mới có thể thao tác được.
    
        6.5.1 -  `Model.js`
        - Đây là class model chung dùng để connect đến database. 
        - Các class model khác đều extends class này để có thể thao tác được với database. 
        
    6.6 - `Folder Repositories`
    - Chứa các class `repository` sử dụng các model để viết các query để thao tác với database.
    - Mỗi model đều phải có 1 class `repository` tương ứng.
     
        6.6.1 - `Repository.js`
        - Đây là class chứa các function đã được viết sẵn để dùng chung và thường xuyên dùng để thao tác với database.
        - Tất cả các `repository` đều phải extends class này để không bị trùng lặp code. 
        - TODO: Sẽ có 1 Repository để thao tác với mongodb.
    
    6.7 `Folder Services`
    - Chứa các class `service` để xử lý các logic của project.
        6.7.1 - `Service.js`
        - // TODO: Sắp tới sẽ phát triển về file này. 
        - Các class service khác đều có thể extends file này để tránh lặp code.
        
    6.8 `Folder Validators`
    - Chứa các khai báo validate dữ liệu request lên server.
    
7 - `Folder cronjob`
- Chứa các cronjob được sử dụng trong project.

8 - `Folder locales`
- Chứa các định nghĩa về đa ngôn ngữ. Đang có 2 file mặc định là: `en.js` và `vi.js`.
- Sẽ remove ở version tiếp theo.
 
9 - `Folder public`
- Chứa các static file.

10 - `Folder routes`
- Chứa các khai báo tất cả các router được dùng trong hệ thống.
- Khuyến khích: Một chức năng lớn nên có một route riêng biệt.

11 - `Folder view`
- Chưa các view của project.
- Sẽ remove ở version tiếp theo.  
