import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import product1 from "../Assets/products/product1.jpg";
import product2 from "../Assets/products/product2.jpg";
import product3 from "../Assets/products/product3.jpg";
import product4 from "../Assets/products/product4.png";
import product5 from "../Assets/products/product5.jpg";
import product6 from "../Assets/products/product6.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Transition } from "react-transition-group";
import { DialogContent, DialogTitle, Modal, ModalDialog } from "@mui/joy";
import { motion } from "framer-motion";

export default function MediaCover() {
  const [open, setOpen] = React.useState(false);
  const productApron = [product1, product2, product3, product2, product5];
  let duration = 0.5;
  const products = [
    { img: product1, title: "Apron", product: productApron },
    { img: product2, title: "Apron", product: productApron },
    { img: product3, title: "Apron", product: productApron },
    { img: product4, title: "Apron", product: productApron },
    { img: product5, title: "Apron", product: productApron },
    { img: product6, title: "Apron", product: productApron },
    { img: product2, title: "Apron", product: productApron },
  ];

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter='1rem'>
          {products.map((data, index) => {
            return (
              <motion.div
                key={index}
                initial={{ position: "relative", top: 200, opacity: 0 }}
                whileInView={{
                  position: "relative",
                  top: 0,
                  opacity: 1,
                  transition: { duration: (duration += 0.5), ease: "linear" },
                }}
                viewport={{ once: true }}
              >
                {/* <motion.div
                  initial={{ position: "relative", top: 200, opacity: 0 }}
                  whileInView={{ position: "relative", top: 0, opacity: 1 }}
                > */}
                <Card
                  component='li'
                  sx={{
                    flexGrow: 1,
                    "&:hover": {
                      boxShadow:
                        "rgba(14, 30, 37, 0.12) 0px 5px 10px 0px,rgba(14, 30, 37, 0.32) 0px 10px 16px 0px",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => {
                    console.log("hello");
                    setOpen(true);
                  }}
                >
                  <CardCover>
                    <img
                      src={data.img}
                      loading='lazy'
                      alt=''
                    />
                  </CardCover>
                  <CardCover
                    sx={{
                      background:
                        "linear-gradient(to top, rgba(148, 209, 255, 0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0, 107, 178, 0.518), rgba(0,0,0,0) 300px)",
                    }}
                  />
                  <CardContent sx={{ justifyContent: "flex-end" }}>
                    <Typography
                      level='body-lg'
                      fontWeight='lg'
                      textColor='#fff'
                      mt={{ xs: 12, sm: 18 }}
                    >
                      {data.title}
                    </Typography>
                  </CardContent>
                </Card>
                {/* </motion.div> */}

                <Transition
                  in={open}
                  timeout={400}
                >
                  {(state) => (
                    <Modal
                      keepMounted
                      open={!["exited", "exiting"].includes(state)}
                      onClose={() => setOpen(false)}
                      slotProps={{
                        backdrop: {
                          sx: {
                            opacity: 0,
                            backdropFilter: "none",
                            transition: `opacity 400ms, backdrop-filter 400ms`,
                            ...{
                              entering: {
                                opacity: 1,
                                backdropFilter: "blur(8px)",
                              },
                              entered: {
                                opacity: 1,
                                backdropFilter: "blur(8px)",
                              },
                            }[state],
                          },
                        },
                      }}
                      sx={{
                        visibility: state === "exited" ? "hidden" : "visible",
                      }}
                    >
                      <ModalDialog
                        size='lg'
                        sx={{
                          width: 900,
                          height: 600,
                          opacity: 0,
                          transition: `opacity 300ms`,
                          ...{
                            entering: { opacity: 1 },
                            entered: { opacity: 1 },
                          }[state],
                        }}
                      >
                        <DialogTitle>{data.title}</DialogTitle>
                        <DialogContent>
                          <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                          >
                            <Masonry gutter='1rem'>
                              {data.product.map((pro, ind) => {
                                return (
                                  <img
                                    src={pro}
                                    alt=''
                                    srcset=''
                                    key={ind}
                                    // width={200}
                                    // height={200}
                                  />
                                );
                              })}
                            </Masonry>
                          </ResponsiveMasonry>
                        </DialogContent>
                      </ModalDialog>
                    </Modal>
                  )}
                </Transition>
              </motion.div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}
