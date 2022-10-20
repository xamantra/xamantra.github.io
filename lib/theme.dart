import 'package:flutter/material.dart';
import 'package:flutter_portfolio/src/controllers/core/provider.dart';
import 'package:flutter_portfolio/src/controllers/theme_controller.dart';

Color backgroundOnCard(BuildContext context) {
  final isDarkMode = Provider.of<ThemeController>(context).isDarkMode;
  return isDarkMode ? Color(0xff323232) : Color.fromARGB(255, 218, 218, 218);
}

Color borderColor(BuildContext context) {
  final isDarkMode = Provider.of<ThemeController>(context).isDarkMode;
  return Color(0xff383838).withOpacity(isDarkMode ? 1 : 0.2);
}

Color accentColor(BuildContext context) {
  final isDarkMode = Provider.of<ThemeController>(context).isDarkMode;
  return isDarkMode ? Colors.pinkAccent : Colors.pink;
}

Color bodyTextColor(BuildContext context) {
  final isDarkMode = Provider.of<ThemeController>(context).isDarkMode;
  return isDarkMode ? Color.fromARGB(255, 194, 194, 194) : Color.fromARGB(255, 32, 32, 32);
}
