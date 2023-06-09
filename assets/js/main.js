function setupGallery() {
  // Lấy tất cả các ảnh trong gallery
  const galleryImages = document.querySelectorAll('.gallery-img');

  // Lấy fullscreen modal và fullscreen image
  const fullscreenModal = document.getElementById('fullscreen-modal');
  const fullscreenImg = document.getElementById('fullscreen-img');

  // Gắn sự kiện click vào mỗi ảnh trong gallery
  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      // Lấy src của ảnh được click
      const imageSrc = image.getAttribute('src');

      // Đặt src của fullscreen image
      fullscreenImg.setAttribute('src', imageSrc);

      // Hiển thị fullscreen modal
      fullscreenModal.style.display = 'block';
    });
  });

  // Gắn sự kiện click vào fullscreen modal để đóng nó
  fullscreenModal.addEventListener('click', () => {
    fullscreenModal.style.display = 'none';
  });
}

// Gọi hàm setupGallery khi cần thiết
window.onload = function() {
  setupGallery();
};



function startSlideShow() {
    const slides = document.querySelectorAll('.banner__img');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    const slideInterval = setInterval(nextSlide, 3000);
}

startSlideShow();


function register() {
  const username = document.getElementById("username-input").value;
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const cfpassword = document.getElementById("cfpassword-input").value;
  
  if (username && email && password && cfpassword) {
    if (password === cfpassword) {
      const userInfo = {
        username: username,
        email: email,
        password: password
      };
      
      // Lưu thông tin vào localStorage
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      
      alert("Đăng kí thành công!");
    } else {
      alert("Mật khẩu không khớp!");
    }
  } else {
    alert("Vui lòng điền đầy đủ thông tin!");
  }
}

// --------------------- tăng giảm số lượng người lớn-------------------------
function updateQuantities() {
  function updateQuantityAdults() {
      var countElement = document.querySelector(".pay-content-list-quantity .count-adult");
      var priceElement = document.querySelector(".pay-content-list-quantity .pay-content-list-price span");

      var count = parseInt(countElement.textContent);
      var price = parseInt(priceElement.textContent);

      var increaseButton = document.querySelector(".pay-content-list-quantity .increase-adult");
      increaseButton.addEventListener("click", function() {
          count++;
          countElement.textContent = count;
          price += 3000000;
          priceElement.textContent = price;
          updateTotalPrice();
      });

      var decreaseButton = document.querySelector(".pay-content-list-quantity .decrease-adult");
      decreaseButton.addEventListener("click", function() {
          if (count > 0) {
              count--;
              countElement.textContent = count;
              price -= 3000000;
              priceElement.textContent = price;
              updateTotalPrice();
          }
      });
  }

// ---------------------------- tăng giảm số lượng trẻ em ========================================

  function updateQuantityChildren() {
      var countElement = document.querySelector(".pay-content-list-quantity-1 .count-child");
      var priceElement = document.querySelector(".pay-content-list-quantity-1 .pay-content-list-price-1 span");

      var count = parseInt(countElement.textContent);
      var price = parseInt(priceElement.textContent);

      var increaseButton = document.querySelector(".pay-content-list-quantity-1 .increase-child");
      increaseButton.addEventListener("click", function() {
          count++;
          countElement.textContent = count;
          price += 1000000;
          priceElement.textContent = price;
          updateTotalPrice();
      });

      var decreaseButton = document.querySelector(".pay-content-list-quantity-1 .decrease-child");
      decreaseButton.addEventListener("click", function() {
          if (count > 0){
            count--;
            countElement.textContent = count;
            price -= 1000000;
            priceElement.textContent = price;
            updateTotalPrice();
        }
    });
}

function updateTotalPrice() {
    var adultPrice = parseInt(document.querySelector(".pay-content-list-quantity .pay-content-list-price span").textContent);
    var adultCount = parseInt(document.querySelector(".pay-content-list-quantity .count-adult").textContent);
    var childPrice = parseInt(document.querySelector(".pay-content-list-quantity-1 .pay-content-list-price-1 span").textContent);
    var childCount = parseInt(document.querySelector(".pay-content-list-quantity-1 .count-child").textContent);
    var totalPrice = adultPrice * adultCount + childPrice * childCount;

    document.querySelector(".total-price").textContent = totalPrice;
}

updateQuantityAdults();
updateQuantityChildren();
updateTotalPrice();
}

updateQuantities();

// ------------------------------------ thanh toán thẻ -------------------------------
function showBankImage() {
  var selectElement = document.querySelector(".options");
  var bankImageElement = document.getElementById("bankImage");

  // Get the selected option value
  var selectedOption = selectElement.value;

  // Set the image source based on the selected option
  switch (selectedOption) {
    case "mb":
      bankImageElement.src = "./assets/img/mb.jpg";
      break;
    case "acb":
      bankImageElement.src = "./assets/img/acb.jpg";
      break;
    case "vietinbank":
      bankImageElement.src = "./assets/img/vietinbank.jpg";
      break;
    case "bidv":
      bankImageElement.src = "./assets/img/bidv.jpg";
      break;
    case "agribank":
      bankImageElement.src = "./assets/img/agribank.jpg";
      break;
    case "vietcombank":
      bankImageElement.src = "./assets/img/vietcombank.jpg";
      break;
    case "vpbank":
      bankImageElement.src = "./assets/img/vpbank.jpg";
      break;
    case "vib":
      bankImageElement.src = "./assets/img/vib.jpg";
      break;
    default:
      bankImageElement.src = "";
      break;
  }
}


function changeColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  document.querySelector(".header").style.backgroundColor = "black";
  document.querySelector(".header").style.color = "white";
  document.querySelector(".footer").style.backgroundColor = "black";
  document.querySelector(".footer").style.color = "white";
}
