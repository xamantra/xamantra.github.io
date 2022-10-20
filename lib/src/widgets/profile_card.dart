import 'package:flutter/material.dart';
import 'package:flutter_portfolio/src/controllers/core/provider.dart';
import 'package:flutter_portfolio/src/controllers/data_controller.dart';
import 'package:flutter_portfolio/src/utils/responsive_util.dart';
import 'package:flutter_portfolio/src/widgets/badge.dart';
import 'package:flutter_portfolio/theme.dart';

class ProfileCard extends StatelessWidget {
  const ProfileCard({super.key});

  @override
  Widget build(BuildContext context) {
    final dataController = Provider.of<DataController>(context);
    return Card(
      child: StreamBuilder(
        stream: dataController.state,
        builder: (context, snapshot) {
          final profile = dataController.profileData;
          return AnimatedContainer(
            duration: Duration(milliseconds: 350),
            padding: EdgeInsets.all(Responsive.maxMainSpacing(context) * 1.333),
            child: Row(
              mainAxisSize: MainAxisSize.max,
              children: [
                AnimatedContainer(
                  duration: Duration(milliseconds: 350),
                  width: Responsive.maxSquareSize(context),
                  height: Responsive.maxSquareSize(context),
                  decoration: BoxDecoration(
                    color: backgroundOnCard(context),
                    borderRadius: BorderRadius.circular(24),
                    image: DecorationImage(
                      image: Image.asset(
                        profile.imagePath,
                        width: Responsive.maxSquareSize(context),
                        height: Responsive.maxSquareSize(context),
                      ).image,
                    ),
                  ),
                ),
                SizedBox(width: Responsive.maxMainSpacing(context)),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      profile.name,
                      style: Responsive.mainHeadline(context),
                    ),
                    SizedBox(height: Responsive.maxSmallSpacing(context)),
                    Badge(profile.role),
                  ],
                ),
                Spacer(),
                AnimatedContainer(
                  duration: Duration(milliseconds: 350),
                  width: Responsive.maxSquareSize(context) * 0.65,
                  height: Responsive.maxSquareSize(context) * 0.65,
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: Image.network(
                        profile.techLogoUrl,
                        width: Responsive.maxSquareSize(context) * 0.65,
                        height: Responsive.maxSquareSize(context) * 0.65,
                      ).image,
                    ),
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
