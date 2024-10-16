// Hiển thị giá dịch vụ khi nhấn vào liên kết
function showPrice(serviceName, price) {
    const priceText = `Giá dịch vụ ${serviceName}: ${price}`;
    document.getElementById("service-price").innerText = priceText;
}

// Hiển thị thông báo khi gửi form liên hệ
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.");
});
