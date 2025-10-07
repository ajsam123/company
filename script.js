"use strict";

const openSidebarBtn = document.querySelector(".hamburger");
const closeSidebarBtn = document.querySelector(".close-button");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const sidebarItems = document.querySelectorAll(".sidebar-child");

// Open sidebar
openSidebarBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

// Close sidebar
closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Close when clicking overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Handle sidebar item clicks
sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class from all items
    sidebarItems.forEach((i) => i.classList.remove("active"));
    // Add active class to the clicked item
    item.classList.add("active");

    // Close sidebar and overlay
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });
});
