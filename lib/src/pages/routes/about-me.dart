import 'package:flutter/material.dart';
import 'package:flutter_portfolio/src/widgets/about_card.dart';
import 'package:flutter_portfolio/src/widgets/profile_card.dart';
import 'package:flutter_portfolio/src/widgets/skills_card.dart';

class AboutMe extends StatelessWidget {
  const AboutMe({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      physics: BouncingScrollPhysics(),
      child: Column(
        children: [
          ProfileCard(),
          AboutCard(),
          SkillsCard(),
        ],
      ),
    );
  }
}
