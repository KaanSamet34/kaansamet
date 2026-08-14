import {
  BunIcon,
  GitHubIcon,
  JsIcon,
  OpenAIIcon,
  ShadcnIcon,
  TsIcon,
  VercelIcon,
} from "@/components/icons"

import type { TechStack } from "../types/tech-stack"

export const TECH_STACK: TechStack[] = [
  // Software
  {
    key: "c",
    title: "C",
    href: "https://www.c-language.org/",
    icon: <></>,
    categories: ["Software"],
  },
  {
    key: "cpp",
    title: "C++",
    href: "https://isocpp.org/",
    icon: <></>,
    categories: ["Software"],
  },
  {
    key: "rust",
    title: "Rust",
    href: "https://www.rust-lang.org/",
    icon: <></>,
    categories: ["Software"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    icon: <></>,
    categories: ["Software"],
  },
  {
    key: "assembly",
    title: "Assembly (RISC-V, x86)",
    href: "https://en.wikipedia.org/wiki/Assembly_language",
    icon: <></>,
    categories: ["Software"],
  },
  {
    key: "bash",
    title: "Bash",
    href: "https://www.gnu.org/software/bash/",
    icon: <></>,
    categories: ["Software"],
  },
  {
    key: "csharp",
    title: "C#",
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    icon: <></>,
    categories: ["Software"],
  },
  {
    key: "javascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <JsIcon />,
    categories: ["Software"],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: <TsIcon />,
    categories: ["Software"],
  },
  {
    key: "tcl",
    title: "Tcl",
    href: "https://www.tcl.tk/",
    icon: <></>,
    categories: ["Software"],
  },

  // HDL & Verification
  {
    key: "verilog",
    title: "Verilog",
    href: "https://en.wikipedia.org/wiki/Verilog",
    icon: <></>,
    categories: ["HDL & Verification"],
  },
  {
    key: "systemverilog",
    title: "SystemVerilog",
    href: "https://en.wikipedia.org/wiki/SystemVerilog",
    icon: <></>,
    categories: ["HDL & Verification"],
  },
  {
    key: "uvm",
    title: "UVM",
    href: "https://en.wikipedia.org/wiki/Universal_Verification_Methodology",
    icon: <></>,
    categories: ["HDL & Verification"],
  },

  // Hardware
  {
    key: "stm32",
    title: "STM32",
    href: "https://www.st.com/",
    icon: <></>,
    categories: ["Hardware"],
  },
  {
    key: "esp8266",
    title: "ESP8266",
    href: "https://www.espressif.com/",
    icon: <></>,
    categories: ["Hardware"],
  },
  {
    key: "arduino",
    title: "Arduino",
    href: "https://www.arduino.cc/",
    icon: <></>,
    categories: ["Hardware"],
  },
  {
    key: "gpio",
    title: "GPIO",
    href: "https://en.wikipedia.org/wiki/General-purpose_input/output",
    icon: <></>,
    categories: ["Hardware"],
  },
  {
    key: "uart",
    title: "UART",
    href: "https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter",
    icon: <></>,
    categories: ["Hardware"],
  },
  {
    key: "spi",
    title: "SPI",
    href: "https://en.wikipedia.org/wiki/Serial_Peripheral_Interface",
    icon: <></>,
    categories: ["Hardware"],
  },
  {
    key: "i2c",
    title: "I²C",
    href: "https://en.wikipedia.org/wiki/I%C2%B2C",
    icon: <></>,
    categories: ["Hardware"],
  },
  {
    key: "qspi",
    title: "QSPI",
    href: "https://en.wikipedia.org/wiki/Serial_Peripheral_Interface",
    icon: <></>,
    categories: ["Hardware"],
  },
  {
    key: "pwm",
    title: "PWM",
    href: "https://en.wikipedia.org/wiki/Pulse-width_modulation",
    icon: <></>,
    categories: ["Hardware"],
  },
  {
    key: "mqtt",
    title: "MQTT",
    href: "https://mqtt.org/",
    icon: <></>,
    categories: ["Hardware"],
  },

  // Hardware
  {
    key: "fpga",
    title: "FPGA",
    href: "https://en.wikipedia.org/wiki/Field-programmable_gate_array",
    icon: <></>,
    categories: ["Hardware"],
  },
  {
    key: "riscv",
    title: "RISC-V",
    href: "https://riscv.org/",
    icon: <></>,
    categories: ["Hardware"],
  },
  {
    key: "axi_lite",
    title: "AXI-Lite",
    href: "https://developer.arm.com/Architectures/AMBA",
    icon: <></>,
    categories: ["Hardware"],
  },

  // AI & Data Science
  {
    key: "tensorflow_lite_micro",
    title: "TensorFlow Lite Micro",
    href: "https://www.tensorflow.org/lite/microcontrollers",
    icon: <></>,
    categories: ["AI & Data Science"],
  },
  {
    key: "opencv",
    title: "OpenCV",
    href: "https://opencv.org/",
    icon: <></>,
    categories: ["AI & Data Science"],
  },
  {
    key: "pandas",
    title: "pandas",
    href: "https://pandas.pydata.org/",
    icon: <></>,
    categories: ["AI & Data Science"],
  },
  {
    key: "numpy",
    title: "NumPy",
    href: "https://numpy.org/",
    icon: <></>,
    categories: ["AI & Data Science"],
  },
  {
    key: "matplotlib",
    title: "Matplotlib",
    href: "https://matplotlib.org/",
    icon: <></>,
    categories: ["AI & Data Science"],
  },
  {
    key: "streamlit",
    title: "Streamlit",
    href: "https://streamlit.io/",
    icon: <></>,
    categories: ["AI & Data Science"],
  },

  // Optimization
  /*{
    key: "alns",
    title: "ALNS",
    href: "https://en.wikipedia.org/wiki/Large_neighborhood_search",
    icon: <></>,
    categories: ["Optimization"],
  },*/

  // Web Development
  /*{
    key: "react",
    title: "React",
    href: "https://react.dev/",
    icon: <></>,
    categories: ["Web Development"],
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    icon: <></>,
    categories: ["Web Development"],
  },
  {
    key: "django",
    title: "Django",
    href: "https://www.djangoproject.com/",
    icon: <></>,
    categories: ["Web Development"],
  },*/

  // Development Tools
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    icon: <></>,
    categories: ["Development Tools"],
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com/",
    icon: <GitHubIcon />,
    categories: ["Development Tools"],
  },
  {
    key: "vivado",
    title: "Vivado",
    href: "https://www.amd.com/en/products/software/adaptive-socs-and-fpgas/vivado.html",
    icon: <></>,
    categories: ["Development Tools"],
  },
  {
    key: "openocd",
    title: "OpenOCD",
    href: "https://openocd.org/",
    icon: <></>,
    categories: ["Development Tools"],
  },
  {
    key: "latex",
    title: "LaTeX",
    href: "https://www.latex-project.org/",
    icon: <></>,
    categories: ["Development Tools"],
  },
  {
    key: "visio",
    title: "Microsoft Visio",
    href: "https://www.microsoft.com/en-us/microsoft-365/visio/",
    icon: <></>,
    categories: ["Development Tools"],
  },
  {
    key: "drawio",
    title: "draw.io",
    href: "https://www.drawio.com/",
    icon: <></>,
    categories: ["Development Tools"],
  },

  // Operating Systems
  {
    key: "arch_linux",
    title: "Arch Linux",
    href: "https://archlinux.org/",
    icon: <></>,
    categories: ["Operating Systems"],
  },
  {
    key: "ubuntu_linux",
    title: "Ubuntu",
    href: "https://ubuntu.com/",
    icon: <></>,
    categories: ["Operating Systems"],
  },

  // Game Development
  /*{
    key: "godot",
    title: "Godot",
    href: "https://godotengine.org/",
    icon: <></>,
    categories: ["Game Development"],
  },
  {
    key: "unity",
    title: "Unity",
    href: "https://unity.com/",
    icon: <></>,
    categories: ["Game Development"],
  },*/

  // Human Languages
  {
    key: "turkish",
    title: "Turkish (Native)",
    href: "https://en.wikipedia.org/wiki/Turkish_language",
    icon: <></>,
    categories: ["Languages"],
  },
  {
    key: "english",
    title: "English (C1)",
    href: "https://en.wikipedia.org/wiki/English_language",
    icon: <></>,
    categories: ["Languages"],
  },
  {
    key: "chinese",
    title: "Chinese (Beginner)",
    href: "https://en.wikipedia.org/wiki/Chinese_language",
    icon: <></>,
    categories: ["Languages"],
  },
  {
    key: "german",
    title: "German (Beginner)",
    href: "https://en.wikipedia.org/wiki/German_language",
    icon: <></>,
    categories: ["Languages"],
  },
]
