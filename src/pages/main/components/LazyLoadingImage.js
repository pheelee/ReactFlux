import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LazyLoadingImage = ({ src, alt, className, status, style }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = new Image();
          image.onload = () => {
            setLoaded(true);
          };
          image.src = src;
          observer.unobserve(imgRef.current);
        }
      });
    });

    observer.observe(imgRef.current);

    // 在清理函数中使用局部变量保存 imgRef.current 的值
    const currentImgRef = imgRef.current;
    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, [src]);

  return (
    <div ref={imgRef}>
      <AnimatePresence mode="wait">
        {loaded ? (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: status === "read" ? 0.5 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <img src={src} alt={alt} className={className} style={style} />
          </motion.div>
        ) : (
          <div
            className="img-placeholder"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "var(--color-fill-2)",
              position: "absolute",
              left: 0,
              top: 0,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LazyLoadingImage;
