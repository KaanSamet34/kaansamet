import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Kaan Samet",
  lastName: "Çekmez",
  displayName: "Kaan Samet Çekmez",
  username: "KaanSamet34",
  gender: "male",
  pronouns: "he/him",
  bio: "4th Year Computer Engineering Student at Istinye University",
  flipSentences: [
    "4th Year Computer Engineering Student at Istinye University",
  ],
  address: "Istanbul, Türkiye",
  phoneNumberB64: "KzkwIDUwNSAwNzkgMzI4NA==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  emailB64: "a2Fhbi5zYW1ldDA0QG91dGxvb2suY29t", // base64 encoded
  website: "https://kaansamet34.github.io/",
  jobTitle: "4th Year Student",
  jobs: [],
  about: `I'm Kaan, a fourth-year Computer Engineering student at İstinye University (GPA: 3.80).

My areas of interest include:

- Embedded Systems
  - Microcontrollers: I've developed projects using STM32, ESP8266, and Arduino-based platforms. Additionally, I'm a member of the Fusion team who participated in the Teknofest Chip Design Competition, where we developed a custom RISC-V-based microcontroller.
  - IoT: I've used low-cost microcontrollers, such as the ESP8266 (ESP-01S), to add network connectivity and MQTT-based communication to traditionally offline devices.

- Digital Design
  - FPGAs: I've worked with the Basys 3 and ZedBoard development platforms.
  - Hardware Accelerators: I'm currently developing an AI accelerator for TensorFlow Lite Micro's MicroSpeech model.
  - RISC-V Processors: I'm particularly interested in processor architecture and custom RISC-V-based systems. One of my long-term goals is to develop an RV32IMA_Zicsr_Zifencei processor and microcontroller capable of running Zephyr.
  - Digital Signal Processing: I'm interested in signal processing, computer vision, and AI applications.

- Optimization Algorithms
  - I've implemented an Adaptive Large Neighborhood Search (ALNS) algorithm to solve pickup-and-delivery optimization problems.

- Operating Systems
  - - Operating Systems
  - I use Linux (Arch) as my primary operating system and am comfortable working in a command-line environment. I regularly use shell utilities, development tools, and scripting to streamline my workflow. I find that it is often more convenient for software development than the alternatives.
`,
  avatar:
    "https://raw.githubusercontent.com/KaanSamet34/kaansamet34.github.io/main/assets/images/avatar.webp",
  avatarVariants: {
    lightOff:
      "https://raw.githubusercontent.com/KaanSamet34/kaansamet34.github.io/main/assets/images/avatar.webp",
    lightOn:
      "https://raw.githubusercontent.com/KaanSamet34/kaansamet34.github.io/main/assets/images/avatar.webp",
    darkOff:
      "https://raw.githubusercontent.com/KaanSamet34/kaansamet34.github.io/main/assets/images/avatar.webp",
    darkOn:
      "https://raw.githubusercontent.com/KaanSamet34/kaansamet34.github.io/main/assets/images/avatar.webp",
  },
  ogImage:
    "https://raw.githubusercontent.com/KaanSamet34/kaansamet34.github.io/main/assets/images/avatar.webp",
  namePronunciationUrl: "https://assets.chanhdai.com/audio/chanhdai.mp3",
  timeZone: "Europe/Istanbul",
  keywords: ["Kaan Samet Çekmez", "Kaan Samet"],
  dateCreated: "2026-08-14", // YYYY-MM-DD
}
