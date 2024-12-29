import { useState } from "react";
import "./Blog.jsx";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
        id: 1,
        title: "Giới thiệu về Java?",
        src: "./img/java.png",
        content: (
          <>
            <p>
              <strong>Java</strong> là một ngôn ngữ lập trình hướng đối tượng, đa nền tảng và được sử dụng rộng rãi trong phát triển phần mềm. 
              Nó được thiết kế để có thể chạy trên bất kỳ nền tảng nào mà không cần thay đổi mã nguồn, nhờ vào nguyên lý 
              "Write Once, Run Anywhere" (Viết một lần, chạy mọi nơi).
            </p>
            <p>
              Điều này làm cho Java trở thành một trong những ngôn ngữ lý tưởng cho việc phát triển ứng dụng với khả năng tương thích cao 
              trên nhiều môi trường khác nhau, từ máy tính để bàn cho đến các hệ thống di động và máy chủ.
            </p>
            <p>
              <strong>Cú pháp của Java</strong> có sự tương đồng với ngôn ngữ C++, nhưng được tối giản và cải tiến, làm cho Java dễ học và sử dụng hơn, 
              đồng thời cũng đảm bảo tính an toàn và hiệu suất. Một đặc điểm nổi bật của Java là cơ chế Garbage Collection giúp quản lý bộ nhớ tự động, 
              giảm thiểu nguy cơ rò rỉ bộ nhớ.
            </p>
            <p>
              <strong>Ứng dụng phổ biến:</strong>
            </p>
            <ul>
              <li>Phát triển ứng dụng web</li>
              <li>Ứng dụng di động (đặc biệt là trên nền tảng Android)</li>
              <li>Phần mềm doanh nghiệp</li>
              <li>Hệ thống nhúng</li>
              <li>Ứng dụng IoT</li>
            </ul>
            <p>
              <strong>Lịch sử phát triển của Java</strong>
            </p>
            <img 
            src="./img/lichsu.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
            <p>
              Java được phát triển bởi James Gosling cùng đội ngũ tại Sun Microsystems vào năm 1991, với tên gọi ban đầu là "Oak". 
              Ngôn ngữ này được đổi tên thành "Java" vào năm 1995 và chính thức được phát hành ra thị trường. Ngay từ những ngày đầu, 
              Java đã gây ấn tượng mạnh mẽ nhờ khả năng tương thích cao trên nhiều nền tảng, giúp lập trình viên không phải viết lại mã 
              cho từng hệ điều hành riêng biệt.
            </p>
            <p>
              Năm 2009, Oracle đã mua lại Sun Microsystems, trở thành nhà phát triển chính của Java và tiếp tục duy trì cũng như phát triển ngôn ngữ này. 
              Hiện nay, Java là một trong những ngôn ngữ lập trình phổ biến nhất trên thế giới, với hàng triệu lập trình viên sử dụng mỗi ngày, 
              từ các lập trình viên cá nhân đến các công ty lớn trên toàn cầu.
            </p>
            <p>
              <strong>Cách hoạt động của Java</strong>
            </p>
            <p>
              Java hoạt động thông qua một cơ chế đặc biệt gọi là "Java Virtual Machine" (JVM). Mã nguồn Java được biên dịch thành bytecode, 
              một dạng mã trung gian, thay vì được biên dịch trực tiếp thành mã máy như các ngôn ngữ khác. Mã bytecode này sau đó được thực thi 
              bởi JVM trên bất kỳ hệ điều hành nào mà JVM đã được cài đặt. Điều này giúp Java thực hiện nguyên lý "Write Once, Run Anywhere" 
              mà không cần thay đổi mã nguồn.
            </p>
            <p>
              JVM là một phần quan trọng của nền tảng Java, vì nó không chỉ thực thi mã bytecode mà còn cung cấp các tính năng quan trọng 
              như quản lý bộ nhớ (Garbage Collection) và bảo mật. Ngoài ra, Java còn cung cấp các thư viện và API phong phú hỗ trợ nhiều 
              tính năng khác nhau như kết nối cơ sở dữ liệu, giao diện người dùng đồ họa, và các dịch vụ web. Điều này giúp lập trình viên 
              dễ dàng xây dựng các ứng dụng phức tạp và mạnh mẽ.
            </p>
            <p>
              Với tính năng đa nền tảng, sự ổn định và cộng đồng lập trình viên đông đảo, Java vẫn là một trong những ngôn ngữ phổ biến nhất, 
              được yêu thích trong nhiều lĩnh vực từ ứng dụng doanh nghiệp, khoa học dữ liệu đến phát triển ứng dụng di động.
            </p>
          </>
        ),
      },
    {
      id: 2,
      title: "Java Framework là gì?",
      src: "./img/jav-fa.png",
      content: (
        <>
          <p>
            <strong>Java Framework</strong> là bộ công cụ hoặc thư viện phần mềm được phát triển dựa trên ngôn ngữ Java để giúp lập trình viên phát triển ứng dụng dễ dàng hơn. 
            Các framework cung cấp các cấu trúc, phương thức và thư viện để thực hiện các công việc thường xuyên như xử lý dữ liệu, giao tiếp với cơ sở dữ liệu, 
            quản lý giao diện người dùng, v.v.
          </p>
    
          <p><strong>1. Spring Framework:</strong></p>
          <img 
            src="./img/spring.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
          <p>
            Spring là một framework phổ biến cho việc phát triển các ứng dụng Java, đặc biệt là các ứng dụng doanh nghiệp. Nó cung cấp một loạt các công cụ và tính năng, bao gồm:
          </p>
          <ul>
            <li>
              <strong>Dependency Injection (DI):</strong> Giúp quản lý các phụ thuộc giữa các đối tượng, tạo ra các ứng dụng dễ kiểm thử và bảo trì hơn.
            </li>
            <li>
              <strong>Aspect-Oriented Programming (AOP):</strong> Cho phép lập trình viên xử lý các mối quan tâm xuyên suốt ứng dụng như logging, transaction management mà không làm phức tạp mã nguồn.
            </li>
            <li>
              <strong>Spring Boot:</strong> Cung cấp một môi trường dễ dàng để phát triển các ứng dụng microservices và các ứng dụng Java web mà không cần phải cấu hình phức tạp.
            </li>
            <li>
              <strong>Spring Security:</strong> Tích hợp các giải pháp bảo mật cho các ứng dụng web và doanh nghiệp.
            </li>
          </ul>
          <p>
            Spring Framework rất linh hoạt, hỗ trợ các loại ứng dụng khác nhau từ web, cơ sở dữ liệu đến microservices.
          </p>
    
          <p><strong>2. Hibernate:</strong></p>
          <img 
            src="./img/hibe.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
          <p>
            Hibernate là một framework ORM (Object-Relational Mapping) giúp lập trình viên tương tác với cơ sở dữ liệu mà không cần viết quá nhiều mã SQL. Các tính năng nổi bật của Hibernate bao gồm:
          </p>
          <ul>
            <li>
              <strong>Quản lý kết nối cơ sở dữ liệu:</strong> Hibernate tự động quản lý các kết nối đến cơ sở dữ liệu, giảm thiểu sự can thiệp của lập trình viên.
            </li>
            <li>
              <strong>Mapping đối tượng vào cơ sở dữ liệu:</strong> Giúp ánh xạ các đối tượng Java vào các bảng trong cơ sở dữ liệu một cách tự động, giảm thiểu lỗi và nâng cao hiệu quả phát triển.
            </li>
            <li>
              <strong>HQL (Hibernate Query Language):</strong> Hibernate cung cấp ngôn ngữ truy vấn riêng giúp việc thao tác dữ liệu dễ dàng hơn mà không phải viết SQL truyền thống.
            </li>
          </ul>
          <p>
            Hibernate hỗ trợ nhiều loại cơ sở dữ liệu và có thể tích hợp với các framework khác như Spring để tối ưu hóa quy trình phát triển ứng dụng.
          </p>
    
          <p><strong>3. JSF (JavaServer Faces):</strong></p>
          <img 
            src="./img/jsf.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
          <p>
            JSF là một framework dùng để phát triển giao diện người dùng (UI) cho các ứng dụng web. Với JSF, lập trình viên có thể phát triển các ứng dụng web động mà không phải viết quá nhiều mã phía client. 
            Các tính năng nổi bật của JSF gồm:
          </p>
          <ul>
            <li>
              <strong>Component-based UI:</strong> JSF cung cấp các thành phần giao diện người dùng (UI components) như buttons, input fields, tables, v.v. giúp xây dựng giao diện một cách dễ dàng.
            </li>
            <li>
              <strong>Event handling:</strong> JSF có hệ thống xử lý sự kiện mạnh mẽ cho phép lập trình viên dễ dàng quản lý các hành động của người dùng, chẳng hạn như nhấp chuột, nhập liệu.
            </li>
            <li>
              <strong>Managed Beans:</strong> JSF sử dụng các managed beans để chứa logic của giao diện, giúp mã nguồn rõ ràng và dễ quản lý.
            </li>
            <li>
              <strong>Facelets:</strong> Đây là một hệ thống mẫu (template system) của JSF, giúp tách biệt phần giao diện và logic ứng dụng, mang lại sự linh hoạt khi thiết kế giao diện.
            </li>
          </ul>
          <p>
            JSF là một framework mạnh mẽ cho các ứng dụng web với giao diện động, và được sử dụng phổ biến trong các ứng dụng doanh nghiệp lớn, 
            nơi tính linh hoạt và khả năng mở rộng là rất quan trọng.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Các cấu trúc điều khiển trong Java",
      src: "./img/cautruc.jpg",
      content: (
        <>
          <p>
            <strong>Câu lệnh điều kiện (If-Else):</strong> Câu lệnh điều kiện trong Java cho phép chương trình kiểm tra một điều kiện và thực hiện các hành động khác nhau dựa trên việc điều kiện đó đúng hay sai. Cấu trúc của câu lệnh điều kiện if-else bao gồm:
          </p>
          <ul>
            <li><strong>if:</strong> Kiểm tra điều kiện và thực thi một đoạn mã nếu điều kiện đúng.</li>
            <li><strong>else:</strong> Thực thi một đoạn mã khác nếu điều kiện if không đúng.</li>
            <li><strong>else if:</strong> Sử dụng khi có nhiều điều kiện khác nhau cần kiểm tra, cho phép thực hiện các hành động tương ứng cho mỗi điều kiện.</li>
          </ul>
          <img 
            src="./img/if-else.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
          <p>
            <strong>Vòng lặp (Loops):</strong> Vòng lặp cho phép thực hiện một đoạn mã nhiều lần mà không cần viết lại mã. Các loại vòng lặp trong Java bao gồm:
          </p>
          <ul>
            <li>
              <strong>for:</strong> Dùng khi bạn biết trước số lần lặp, với cấu trúc bao gồm khởi tạo, điều kiện và thay đổi biến sau mỗi vòng lặp.
            </li>
            <img 
            src="./img/for.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
            <li>
              <strong>while:</strong> Dùng khi bạn không biết trước số lần lặp, vòng lặp sẽ tiếp tục cho đến khi điều kiện không còn đúng.
            </li>
            <img 
            src="./img/while.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
            <li>
              <strong>do-while:</strong> Giống như vòng lặp while nhưng đảm bảo rằng mã sẽ được thực thi ít nhất một lần.
            </li>
          </ul>
          <p><strong>Ví dụ vòng lặp do-while:</strong></p>
          <pre>
            <code>
              int k = 1;
              do {"{"}
                  System.out.println(k);
                  k++;
              {"}"} while (k {'<='} 5);
            </code>
          </pre>
    
          <p>
            <strong>Câu lệnh chuyển (Switch):</strong> Câu lệnh switch cho phép kiểm tra một giá trị và thực thi các đoạn mã tương ứng với các giá trị cụ thể. Cấu trúc của câu lệnh switch bao gồm:
          </p>
          <ul>
            <li><strong>switch:</strong> Kiểm tra giá trị của một biểu thức.</li>
            <li><strong>case:</strong> Xử lý các giá trị cụ thể của biểu thức.</li>
            <li><strong>default:</strong> Xử lý khi không có giá trị nào trong các case phù hợp.</li>
          </ul>
          <p>
      <strong>Biến (Variables):</strong> Dùng để lưu trữ dữ liệu trong Java. Các loại biến phổ biến gồm:
    </p>
    <ul>
      <li><strong>int:</strong> Kiểu số nguyên.</li>
      <li><strong>double:</strong> Kiểu số thực.</li>
      <li><strong>String:</strong> Kiểu chuỗi.</li>
      <li><strong>boolean:</strong> Kiểu giá trị đúng/sai.</li>
    </ul>
    <img 
            src="./img/bien.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
    <p>
      <strong>Kiểu dữ liệu (Data Types):</strong> Java hỗ trợ hai nhóm kiểu dữ liệu chính:
    </p>
    <ul>
      <li>
        <strong>Nguyên thủy (Primitive types):</strong> Bao gồm <code>int</code>, <code>char</code>, <code>boolean</code>, <code>double</code>, và các kiểu dữ liệu cơ bản khác.
      </li>
      <img 
            src="./img/nguyenthuy.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
      <li>
        <strong>Không nguyên thủy (Non-Primitive types):</strong> Bao gồm <code>String</code>, <code>Array</code>, <code>Object</code>, và các cấu trúc dữ liệu phức tạp khác.
      </li>
      <img 
            src="./img/khongnguyenthuy.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
    </ul>

    <p>
      <strong>Toán tử (Operators):</strong> Các toán tử trong Java dùng để thực hiện các phép toán, so sánh hoặc gán giá trị. Các nhóm toán tử chính:
    </p>
    <ul>
      <li>
        <strong>Toán tử số học:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>.
      </li>
      <img 
            src="./img/toantu.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
      <li>
        <strong>Toán tử so sánh:</strong> <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>.
      </li>
      <img 
            src="./img/toantuss.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
      <li>
        <strong>Toán tử logic:</strong> <code>&&</code>, <code>||</code>, <code>!</code>.
      </li>
      <img 
            src="./img/ttsosanh.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
    </ul>

    <p>
      <strong>Câu lệnh chuyển (Switch):</strong> Câu lệnh <code>switch</code> cho phép kiểm tra một giá trị và thực thi các đoạn mã tương ứng với các giá trị cụ thể. Cấu trúc của câu lệnh switch bao gồm:
    </p>
    <ul>
      <li><strong>switch:</strong> Kiểm tra giá trị của một biểu thức.</li>
      <li><strong>case:</strong> Xử lý các giá trị cụ thể của biểu thức.</li>
      <li><strong>default:</strong> Xử lý khi không có giá trị nào trong các case phù hợp.</li>
    </ul>
          <p>
            <strong>Kết luận:</strong> Các cấu trúc điều khiển như câu lệnh điều kiện và vòng lặp đóng vai trò quan trọng trong lập trình, 
            giúp chương trình đưa ra quyết định và thực hiện các hành động linh hoạt trong nhiều tình huống khác nhau. 
            Sử dụng chúng đúng cách không chỉ làm mã nguồn ngắn gọn và dễ hiểu hơn, mà còn tăng hiệu quả và giảm thiểu lỗi lập trình.
          </p>
        </>
      ),
    },
    {
    id: 4,
  title: "Làm Việc với Các Thư Viện và API trong Java",
  src: "./img/thuvien.png",
  content: (
    <>
      <p><strong>Java và Thư Viện Tích Hợp:</strong> Java cung cấp một bộ thư viện phong phú, giúp lập trình viên dễ dàng xử lý các tác vụ phức tạp trong ứng dụng mà không phải lập trình lại từ đầu. Các thư viện và API này hỗ trợ nhiều tính năng, như làm việc với cơ sở dữ liệu, xử lý giao diện người dùng (GUI), đọc/ghi tệp, và nhiều chức năng khác.</p>
      
      <h2><strong>1. Java Database Connectivity (JDBC)</strong></h2>
      <p>JDBC là một API mạnh mẽ trong Java, cho phép kết nối và làm việc với cơ sở dữ liệu. Thông qua JDBC, lập trình viên có thể thực hiện các thao tác như truy vấn, cập nhật dữ liệu và quản lý kết nối cơ sở dữ liệu. Cấu trúc cơ bản của JDBC bao gồm các thành phần như Driver, Connection, Statement và ResultSet. Dưới đây là ví dụ đơn giản sử dụng JDBC để kết nối và truy vấn dữ liệu từ cơ sở dữ liệu:</p>
      
      

      <h2><strong>3. Làm Việc với Tệp trong Java</strong></h2>
      <p>Java cung cấp một số API để làm việc với tệp, bao gồm đọc và ghi dữ liệu vào các tệp văn bản, tệp nhị phân và XML. Các thư viện như <code>java.io</code> và <code>java.nio</code> cho phép bạn xử lý tệp và thư mục một cách linh hoạt. Dưới đây là ví dụ đọc một tệp văn bản:</p>
      
      <pre><code>
    
      </code></pre>

      <h2><strong>4. Thư Viện Bên Ngoài</strong></h2>
      <p>Bên cạnh các thư viện tích hợp của Java, bạn có thể sử dụng các thư viện bên ngoài phát triển bởi cộng đồng, như Apache Commons, Gson, Jackson, Hibernate, v.v. Những thư viện này giúp bạn tiết kiệm thời gian và công sức trong việc phát triển các tính năng phức tạp.</p>

      <h2><strong>Kết luận:</strong></h2>
      <p>Làm việc với các thư viện và API trong Java giúp lập trình viên triển khai nhanh chóng các tính năng phức tạp mà không cần phải tự xây dựng lại từ đầu. Sử dụng đúng thư viện và API không chỉ giúp tiết kiệm thời gian mà còn tăng hiệu suất và tính hiệu quả của ứng dụng, đồng thời giảm thiểu lỗi và chi phí bảo trì trong quá trình phát triển phần mềm.</p>
    </>
  )
},
    {
id: 5,
title: "Java trong phát triển phần mềm",
src: "./img/phattrien.png",
content: (
  <>
    <p><strong>Java trong phát triển phần mềm:</strong> Java là một trong những ngôn ngữ lập trình phổ biến nhất, được sử dụng trong nhiều lĩnh vực khác nhau nhờ vào tính ổn định, hiệu suất cao và tính tương thích đa nền tảng. Dưới đây là một số lĩnh vực mà Java đóng vai trò quan trọng:</p>

    <h3><strong>Ứng dụng di động (Android):</strong></h3>
    <p>Java là ngôn ngữ chính được sử dụng trong phát triển ứng dụng Android. Nhờ vào bộ công cụ phát triển phần mềm Android (Android SDK), lập trình viên có thể tạo ra các ứng dụng di động mạnh mẽ và hiệu quả cho điện thoại, máy tính bảng, và các thiết bị di động khác. Các ứng dụng Android được viết chủ yếu bằng Java, giúp đảm bảo tính ổn định và hiệu suất cao.</p>

    <h3><strong>Ứng dụng web (Spring, Hibernate):</strong></h3>
    <p>Java cũng rất phổ biến trong phát triển ứng dụng web, đặc biệt là thông qua các framework như <strong>Spring</strong> và <strong>Hibernate</strong>. Framework Spring giúp các lập trình viên xây dựng các ứng dụng web mạnh mẽ và linh hoạt, trong khi Hibernate là một công cụ ORM (Object Relational Mapping) giúp tương tác với cơ sở dữ liệu dễ dàng hơn. Java cung cấp các giải pháp mạnh mẽ cho việc phát triển ứng dụng web quy mô lớn với khả năng mở rộng và bảo mật cao.</p>

    <h3><strong>Phần mềm doanh nghiệp (Java EE):</strong></h3>
    <p>Java EE (Enterprise Edition) là một bộ công cụ mạnh mẽ dùng để phát triển các ứng dụng doanh nghiệp quy mô lớn. Java EE bao gồm các công nghệ như EJB (Enterprise JavaBeans), JSP (JavaServer Pages), và Servlets, giúp phát triển các ứng dụng có khả năng mở rộng, bảo mật và quản lý tài nguyên hiệu quả. Nó thường được sử dụng trong các hệ thống phần mềm phức tạp như CRM (Customer Relationship Management) hoặc ERP (Enterprise Resource Planning).</p>

    <h3><strong>Hệ thống nhúng và IoT (Internet of Things):</strong></h3>
    <p>Java còn được sử dụng trong phát triển hệ thống nhúng và IoT. Các thiết bị IoT, như cảm biến, thiết bị thông minh, và các thiết bị tự động hóa, có thể được lập trình bằng Java nhờ vào tính linh hoạt và tính tương thích với nhiều loại thiết bị khác nhau. Java giúp lập trình viên phát triển các hệ thống nhúng có thể hoạt động ổn định và dễ dàng kết nối với mạng Internet, mang lại các giải pháp thông minh cho các ứng dụng IoT.</p>

    <p><strong>Tóm lại:</strong> Java là một ngôn ngữ lập trình cực kỳ mạnh mẽ và linh hoạt, được sử dụng rộng rãi trong nhiều lĩnh vực phát triển phần mềm từ ứng dụng di động, ứng dụng web, phần mềm doanh nghiệp đến hệ thống nhúng và IoT. Tính tương thích đa nền tảng, bảo mật cao, và khả năng mở rộng của Java giúp ngôn ngữ này trở thành sự lựa chọn hàng đầu cho các dự án phát triển phần mềm lớn và phức tạp.</p>
  </>
)
},
{
      id: 6,
      title: "Tổng quan về JavaScript và Java",
      src: "./img/Java-Script.jpg",
      content: (
        <>
          <h2><strong>1. JavaScript là gì?</strong></h2>
          <p>JavaScript là một ngôn ngữ động, đa mô hình với các kiểu và toán tử, các đối tượng và phương thức tích hợp tiêu chuẩn. Cú pháp của nó dựa trên ngôn ngữ Java và C - nhiều cấu trúc từ các ngôn ngữ đó cũng áp dụng cho JavaScript.</p>
          <p>JavaScript là một ngôn ngữ lập trình phổ biến được sử dụng để tạo ra các trang web tương tác. Nó là một phần không thể thiếu của Bộ Ba Công Nghệ Web:</p>
          <ul>
            <li><strong>HTML:</strong> Tạo cấu trúc của trang web.</li>
            <li><strong>CSS:</strong> Thiết kế giao diện và bố cục.</li>
            <li><strong>JavaScript:</strong> Thêm tính năng động và tương tác.</li>
          </ul>
    
          <h3><strong>2. Lịch sử phát triển của JavaScript</strong></h3>
          <img 
            src="./img/lichsujs.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
          <p>Brendan Eich chính là người đã phát triển JavaScript tại Netscape với tiền thân là Mocha. Sau đó, Mocha được đổi thành LiveScript và cuối cùng mới đổi thành JavaScript. Một số mốc phát triển quan trọng của JavaScript:</p>
          <ul>
            <li>Năm 1998: ECMAScript 2 phát hành.</li>
            <li>Năm 1999: ECMAScript 3 ra mắt, mang lại nhiều tính năng mới.</li>
            <li>Năm 2016: JavaScript đã được sử dụng trên 92% website, trở thành công cụ cực kỳ quan trọng đối với lập trình viên.</li>
          </ul>
    
          <h2><strong>3. Java trong phát triển phần mềm</strong></h2>
          <p>Java là một trong những ngôn ngữ lập trình phổ biến nhất, được sử dụng trong nhiều lĩnh vực khác nhau nhờ vào tính ổn định, hiệu suất cao và tính tương thích đa nền tảng. Dưới đây là các lĩnh vực mà Java đóng vai trò quan trọng:</p>
    
          <h3><strong>Ứng dụng di động (Android):</strong></h3>
          <p>Java là ngôn ngữ chính được sử dụng trong phát triển ứng dụng Android. Với bộ Android SDK, lập trình viên có thể tạo ra các ứng dụng di động mạnh mẽ và hiệu quả, đảm bảo tính ổn định và hiệu suất cao.</p>
    
          <h3><strong>Ứng dụng web (Spring, Hibernate):</strong></h3>
          <p>Java phổ biến trong phát triển ứng dụng web thông qua các framework như Spring và Hibernate. Spring giúp xây dựng các ứng dụng linh hoạt, trong khi Hibernate là một công cụ ORM giúp tương tác với cơ sở dữ liệu dễ dàng.</p>
    
          <h3><strong>Phần mềm doanh nghiệp (Java EE):</strong></h3>
          <p>Java EE được sử dụng để phát triển các ứng dụng doanh nghiệp quy mô lớn với các công nghệ như EJB, JSP, và Servlets. Nó thường áp dụng trong các hệ thống như CRM hoặc ERP.</p>
    
          <h3><strong>Hệ thống nhúng và IoT (Internet of Things):</strong></h3>
          <p>Java được sử dụng trong hệ thống nhúng và IoT, nhờ vào tính linh hoạt và khả năng tương thích với nhiều loại thiết bị, giúp phát triển các giải pháp IoT thông minh.</p>
    
          <p><strong>Tóm lại:</strong> JavaScript và Java đều là những công cụ mạnh mẽ, đóng vai trò quan trọng trong lập trình hiện đại, từ phát triển ứng dụng web, di động đến các hệ thống doanh nghiệp và IoT.</p>
        </>
      )
    },
    {
      id: 7,
      title: "JavaScript Framework và cách hoạt động của JavaScript",
      src: "./img/js-fa.png",
      content: (
        <>
          <h2><strong>1. JavaScript Framework là gì?</strong></h2>
          <img 
            src="./img/js-fame.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
          <p>JavaScript Framework là các thư viện được xây dựng dựa trên ngôn ngữ lập trình JavaScript. Các framework này phục vụ cho các mục đích và lĩnh vực khác nhau, giúp lập trình viên tăng tốc độ và hiệu quả khi phát triển ứng dụng. Một số JavaScript Framework phổ biến bao gồm:</p>
          <ul>
            <li><strong>ReactJS:</strong> Thư viện chuyên dùng để phát triển giao diện người dùng và ứng dụng di động.</li>
            <li><strong>Node.js:</strong> Framework mạnh mẽ để xây dựng và phát triển ứng dụng thời gian thực từ phía máy chủ.</li>
            <li><strong>Angular:</strong> Framework được sử dụng để xây dựng các ứng dụng web dạng Single Page Application (SPA).</li>
          </ul>
          <p>Hiểu rõ về từng framework sẽ giúp bạn lựa chọn công cụ phù hợp cho dự án của mình, từ đó tối ưu hóa quá trình phát triển và đạt được kết quả tốt nhất.</p>
  
          <h2><strong>2. Cách hoạt động của JavaScript</strong></h2>
          <img 
            src="./img/cachhdjs.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
          <p>JavaScript hoạt động theo cơ chế đơn luồng (single-threaded), xử lý mã từ trên xuống dưới. Một số khái niệm quan trọng về cách hoạt động của JavaScript bao gồm:</p>
          <ul>
            <li><strong>Execution Context:</strong> Mỗi khi một hàm được gọi, một execution context mới được tạo ra. Execution context chịu trách nhiệm quản lý mã đang được thực thi.</li>
            <li><strong>Call Stack:</strong> Là nơi lưu trữ các execution context. JavaScript thực thi các hàm theo nguyên tắc LIFO (Last In, First Out).</li>
            <li><strong>Event Loop:</strong> Là cơ chế giúp JavaScript xử lý các công việc bất đồng bộ (asynchronous) như AJAX, timers hoặc callbacks.</li>
            <li><strong>Web APIs:</strong> Là các giao diện do trình duyệt cung cấp, giúp JavaScript tương tác với các tính năng như DOM, HTTP requests hoặc Storage.</li>
          </ul>
          <p>Nhờ vào cơ chế hoạt động này, JavaScript có thể xử lý hiệu quả các tác vụ đồng bộ và bất đồng bộ, mang lại trải nghiệm mượt mà cho người dùng trên các ứng dụng web.</p>
        </>
      )
    },
    {
      id: 8,
      title: "Các Khái Niệm Cơ Bản trong JavaScript",
      src: "./img/khainiem.png",
      content: (
        <>
          <h2><strong>1. Biến (Variables)</strong></h2>
          <p>Biến được sử dụng để lưu trữ giá trị trong chương trình. JavaScript cung cấp ba cách khai báo biến:</p>
          <ul>
            <li><strong>var:</strong> Đây là cách khai báo cũ, có phạm vi truy cập toàn cục hoặc trong hàm. Biến khai báo bằng <code>var</code> có thể được khai báo lại trong cùng một phạm vi, điều này dễ gây lỗi trong các ứng dụng phức tạp.</li>
            <li><strong>let:</strong> Cách khai báo hiện đại, được sử dụng cho các giá trị có thể thay đổi. Phạm vi truy cập của biến <code>let</code> chỉ giới hạn trong block (khối mã) mà nó được khai báo.</li>
            <li><strong>const:</strong> Dùng để khai báo các biến không thay đổi giá trị sau khi được gán. Tương tự <code>let</code>, phạm vi truy cập của <code>const</code> là trong block.</li>
          </ul>
          <img 
            src="./img/bien-js.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
          <h2><strong>2. Kiểu Dữ Liệu (Data Types)</strong></h2>
          <p>JavaScript hỗ trợ hai loại kiểu dữ liệu chính:</p>
          <ul>
            <li><strong>Nguyên thủy (Primitive):</strong> Bao gồm các kiểu:
              <ul>
                <li><strong>Number:</strong> Đại diện cho các giá trị số, bao gồm cả số nguyên và số thực.</li>
                <li><strong>String:</strong> Đại diện cho chuỗi ký tự, được đặt trong cặp dấu nháy đơn hoặc nháy kép.</li>
                <li><strong>Boolean:</strong> Chỉ có hai giá trị <code>true</code> hoặc <code>false</code>.</li>
                <li><strong>Undefined:</strong> Giá trị của biến chưa được khởi tạo.</li>
                <li><strong>Null:</strong> Đại diện cho một giá trị rỗng hoặc không tồn tại.</li>
                <li><strong>Symbol:</strong> Một kiểu dữ liệu duy nhất, thường dùng để tạo các giá trị định danh duy nhất.</li>
                <li><strong>BigInt:</strong> Được sử dụng để làm việc với các số nguyên lớn hơn <code>2^53 - 1</code>.</li>
              </ul>
        
            </li>
            <li><strong>Không nguyên thủy (Non-Primitive):</strong> Bao gồm:
              <ul>
                <li><strong>Object:</strong> Tập hợp các cặp key-value để lưu trữ dữ liệu phức tạp.</li>
                <li><strong>Array:</strong> Danh sách các giá trị, mỗi giá trị được gọi là một phần tử và có thể được truy cập thông qua chỉ số.</li>
                <li><strong>Function:</strong> Khối mã có thể tái sử dụng, thường được sử dụng để thực hiện các tác vụ cụ thể.</li>
              </ul>
            </li>
          </ul>
          <img 
            src="./img/kiedljs.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
          <h2><strong>3. Toán Tử (Operators)</strong></h2>
          <p>Toán tử được sử dụng để thực hiện các phép tính hoặc kiểm tra logic trong chương trình:</p>
          <ul>
            <li><strong>Toán tử số học:</strong> Bao gồm các phép tính cơ bản: <code>+</code> (cộng), <code>-</code> (trừ), <code>*</code> (nhân), <code>/</code> (chia), <code>%</code> (lấy phần dư).</li>
            <li><strong>Toán tử logic:</strong> Dùng để kiểm tra các điều kiện: <code>&&</code> (AND), <code>||</code> (OR), <code>!</code> (NOT).</li>
            <li><strong>Toán tử so sánh:</strong> So sánh hai giá trị: <code>==</code>, <code>===</code>, <code>!=</code>, <code>!==</code>,.</li>
          </ul>
          <img 
            src="./img/toantujs.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
          <h2><strong>4. Vòng Lặp (Loops)</strong></h2>
          <p>Vòng lặp được sử dụng để thực hiện một công việc lặp đi lặp lại:</p>
          <ul>
            <li><strong>for:</strong> Vòng lặp với số lần lặp biết trước.</li>
            <li><strong>while:</strong> Vòng lặp thực thi miễn là điều kiện còn đúng.</li>
            <li><strong>do-while:</strong> Tương tự <code>while</code>, nhưng đảm bảo vòng lặp thực thi ít nhất một lần.</li>
          </ul>
          <img 
            src="./img/vonglap.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
          <h2><strong>5. Hàm (Functions)</strong></h2>
          <p>Hàm là khối mã có thể tái sử dụng, giúp tránh việc lặp lại mã. Một hàm được định nghĩa bằng từ khóa <code>function</code>, có thể nhận tham số và trả về giá trị.</p>
          <h2><strong>6. Đối Tượng (Objects)</strong></h2>
          <p>Đối tượng là các thực thể chứa dữ liệu và các phương thức (hành vi). Đối tượng được biểu diễn dưới dạng các cặp key-value.</p>

          <p>Các khái niệm cơ bản này là nền tảng quan trọng để bạn có thể học và áp dụng JavaScript hiệu quả.</p>
          <img 
            src="./img/ham.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
        </>
      )
    },
    {
        id: 9,
        title: "Làm Việc Với DOM và Xử Lý Sự Kiện trong JavaScript",
        src: "./img/dom.png",
        content: (
          <>
            <h2><strong>1. Làm Việc Với DOM (Document Object Model)</strong></h2>
            <p>Document Object Model (DOM) là một mô hình đại diện cho cấu trúc HTML hoặc XML của trang web. DOM cho phép JavaScript tương tác và thay đổi nội dung, cấu trúc, và kiểu dáng của trang web một cách linh hoạt.</p>
            <p>Thông qua DOM, bạn có thể thực hiện các tác vụ như:</p>
            <ul>
              <li>Thay đổi nội dung của một phần tử HTML.</li>
              <li>Thêm, sửa hoặc xóa các phần tử HTML.</li>
              <li>Thay đổi các thuộc tính hoặc kiểu dáng CSS của phần tử.</li>
            </ul>
            <img 
            src="./img/domjs.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />
            <h2><strong>2. Xử Lý Sự Kiện (Events)</strong></h2>
            <p>JavaScript có thể tự động xử lý các sự kiện của người dùng mà không cần tương tác trực tiếp.</p>
            <img 
            src="./img/event.png" 
            alt="Java Logo" 
            style={{ width: "500px", height: "auto", display: "block", margin: "10px auto" }} 
          />            <pre>
      <script>
        const text = document.getElementById("colorChange");
        text.style.color = "blue";
      </script>
            </pre>
            <p>Trong ví dụ này, màu chữ của đoạn văn được tự động thay đổi thành màu xanh ngay khi trang được hiển thị.</p>
    
            <h3><strong>Kết hợp DOM và Xử Lý Sự Kiện</strong></h3>
            <p>Bạn có thể kết hợp DOM và xử lý sự kiện để xây dựng các tính năng tương tác tự động, như hiển thị thông báo khi trang được tải:</p>
            
            <p>Thông báo sẽ tự động xuất hiện khi trang web tải xong, mà không cần người dùng thực hiện hành động nào.</p>
    
            <p>DOM và xử lý sự kiện giúp tạo nên các trang web động và thân thiện, đáp ứng các tình huống mà người dùng không cần nhấp chuột hoặc thực hiện thao tác cụ thể.</p>
          </>
        )
      }
  ];

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <div className="blog-container">
      {!selectedPost ? (
        <div className="blog-grid">
          {posts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-image">
                <img src={post.src} alt={post.title} />
              </div>
              <h3>{post.title}</h3>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePostClick(post); }}>
                Đọc bài viết
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="blog-detail">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button className="back-button" onClick={handleBack}>
            Quay lại
          </button>
        </div>
      )}
    </div>
  );
}
