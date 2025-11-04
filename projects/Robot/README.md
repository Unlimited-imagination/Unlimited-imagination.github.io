# Project Robot

Overview
-------
Project Robot aims to design and build an autonomous robot from the ground up: mechanical chassis, electronics, sensors, and control firmware/software.

Getting started
---------------
- Hardware: Choose a microcontroller (ESP32 / STM32 / Arduino), motor drivers, motors, wheels, battery, sensors (ultrasonic, IMU, LIDAR).
- Software: Set up the toolchain for your microcontroller. Consider using PlatformIO or native toolchains.

TODOs
-----
- [ ] Finalize parts list and suppliers
- [ ] Create mechanical CAD for chassis (v1)
- [ ] Design motor driver interface and test
- [ ] Implement base motor control loop and PID
- [ ] Add obstacle detection with ultrasonic / LIDAR
- [ ] Integrate basic telemetry (serial / WiFi)

Milestones
----------
1. Milestone 1 — Prototype wheels & drive (2–4 weeks)
   - Build a simple chassis with two motors
   - Drive the motors programmatically and test speed/torque
2. Milestone 2 — Sensor integration (4–8 weeks)
   - Add sensors and implement basic obstacle avoidance
3. Milestone 3 — Navigation and autonomy (8–16 weeks)
   - Implement mapping/localization and an autonomous demo

Notes
-----
Keep clear hardware logs and firmware versioning. Use tags/releases for milestone snapshots.