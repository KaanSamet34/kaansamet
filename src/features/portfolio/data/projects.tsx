import { Microchip, Sigma, Sparkles, Truck } from "lucide-react"

import { ChanhDaiMark } from "@/components/chanhdai-mark"
import {
  QuaricIcon,
  ReactWheelPickerIcon,
  ZaDarkIcon,
} from "@/components/icons"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "fusion-mcu",
    title: "Fusion MCU",
    period: {
      start: "12.2024",
      end: "Present",
    },
    skills: [
      "Verilog",
      "SystemVerilog",
      "UVM",
      "Verification",
      "RISC-V",
      "Assembly",
      "C",
      "AXI-Lite",
      "UART",
      "SPI/QSPI",
      "I2C",
      "GPIO",
      "Timer",
      "FPGA",
      "Teknofest",
    ],
    description: `RISC-V-based microcontroller developed as the captain of the Fusion team participating in the Teknofest Chip Design Competition.
- Led the development of the project and coordinated the work of team members throughout the design and implementation process.
- Designed and developed UART and QSPI peripherals according to the project specifications.
- Oversaw the design and UVM-based verification of the microcontroller's peripherals.
- Integrated the peripherals into an open-source RISC-V processor through an AXI-Lite interconnect.
- Implemented, synthesized, and validated the complete design on FPGA development boards.
- Developed and successfully executed low-level drivers using RISC-V Assembly and C.
- Created automation scripts to accelerate the development workflow.
- Prepared technical documentation and system block diagrams.
- Achieved a score of 84.75/100 on the Preliminary Design Report and 70/100 on the Detailed Design Report during the Teknofest Chip Design Competition.`,
    icon: <Microchip />,
    isExpanded: true,
    link: "",
  },

  {
    id: "mathematical-route-optimization",
    title: "Mathematical Route Optimization",
    period: {
      start: "11.2025",
      end: "01.2026",
    },
    skills: ["C++", "ALNS", "GTK", "Optimization", "Pickup & Delivery"],
    description: `Optimization application developed to solve pickup-and-delivery problems in logistics.
- Collaborated with an interdisciplinary team to optimize logistics operations with respect to cost and time.
- Implemented an Adaptive Large Neighborhood Search (ALNS) algorithm in C++.
- Achieved significant performance improvements on benchmark datasets from the literature.
- Developed a user-friendly graphical interface using the GTK library.`,
    icon: <Truck />,
    isExpanded: false,
    link: "",
  },

  {
    id: "vehicle-price-prediction",
    title: "ML-Based Vehicle Price Prediction",
    period: {
      start: "10.2025",
      end: "01.2026",
    },
    skills: [
      "Python",
      "pandas",
      "NumPy",
      "Matplotlib",
      "CatBoost",
      "Machine Learning",
      "Data Analysis",
      "Streamlit",
    ],
    description: `Machine learning project for predicting second-hand vehicle prices.
- Led a team developing a machine learning solution for vehicle price prediction.
- Performed data analysis, preprocessing, and cleaning to improve model performance.
- Evaluated six machine learning algorithms and coordinated their implementation across the team.
- Used cross-validation and hyperparameter tuning to optimize model performance.
- Built a Streamlit web application around the best-performing model, CatBoost.`,
    icon: <Sparkles />,
    isExpanded: false,
    link: "",
  },
]
