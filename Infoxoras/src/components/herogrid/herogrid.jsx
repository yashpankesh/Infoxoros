import React, { useState, useEffect } from "react";

const Herogrid = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Check the window width and update visibility
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the visibility on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: isVisible ? "flex" : "none", // Hide grid if screen size is less than 1000px
        justifyContent: "center",
        backgroundColor: "#18181b00",
        // display: "none",
        position: "relative",
        overflow:"visible",
        // Height: "40vh", // Use minHeight instead of height
      }}
    >
      <div
        style={{
          display: "grid",
          padding: "20px",
          width: "80%",
          minHeight: "70vh",
        // overflow:"visible",
        // position: "absolute",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(3, auto)", // Use auto for row height
          columnGap: "15px",
          rowGap: "15px",
          borderRadius: "10px",
        }}
      >
        {/* Grid items */}
        <div
          style={{
            gridArea: "1 / 1 / 3 / 2",
            backgroundImage: "url('src/images/div1.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            boxShadow: "0px 0px 100px -50px #000",
          }}
        ></div>
        <div
          style={{
            gridArea: "1 / 2 / 3 / 3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#208ABA",
            backgroundColor: "#B1DDF1FC",
            borderRadius: "10px",
            boxShadow: "0px 0px 100px -50px #000",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800" }}>Data</h2>
        </div>
        <div
          style={{
            gridArea: "3 / 1 / 4 / 3",
            backgroundImage: "url('src/images/div3.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            boxShadow: "0px 0px 100px -50px #000",
          }}
        ></div>

        {/* Additional grid items */}
        <div
          style={{
            gridArea: "1 / 3 / 3 / 4",
            backgroundImage: "url('src/images/div4.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            boxShadow: "0px 0px 100px -50px #000",
          }}
        ></div>
        <div
          style={{
            gridArea: "1 / 4 / 2 / 5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#DA9177",
            backgroundColor: "#FFDACD",
            borderRadius: "10px",
            boxShadow: "0px 0px 100px -50px #000",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800" }}>Services</h2>
        </div>
        <div
          style={{
            gridArea: "2 / 4 / 4 / 5",
            backgroundImage: "url('src/images/div6.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            boxShadow: "0px 0px 100px -50px #000",
          }}
        ></div>
        <div
          style={{
            gridArea: "3 / 3 / 4 / 4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#C9B55B",
            backgroundColor: "#FFF6CD",
            borderRadius: "10px",
            boxShadow: "0px 0px 100px -50px #000",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800" }}>Strategy</h2>
        </div>

        {/* More items */}
        <div
          style={{
            gridArea: "1 / 5 / 2 / 7",
            backgroundImage: "url('src/images/div8.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            boxShadow: "0px 0px 100px -50px #000",
          }}
        ></div>
        <div
          style={{
            gridArea: "2 / 5 / 4 / 6",
            backgroundImage: "url('src/images/div9.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            boxShadow: "0px 0px 100px -50px #000",
          }}
        ></div>
        <div
          style={{
            gridArea: "2 / 6 / 4 / 7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9545B3",
            backgroundColor: "#F0CBFE",
            borderRadius: "10px",
            boxShadow: "0px 0px 100px -50px #000",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800" }}>Experience</h2>
        </div>
      </div>
    </div>
  );
};

export default Herogrid;