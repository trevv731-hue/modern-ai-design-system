package com.designsystem.hybrid

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.spring
import androidx.compose.animation.core.tween
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.ripple
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.unit.dp

/** Spatial = spring (may overshoot). Effects = tween (never overshoot). */

object HNMotion {
    fun <T> spatial(
        damping: Float = 0.86f,
        stiffness: Float = Spring.StiffnessMediumLow,
    ): FiniteAnimationSpec<T> = spring(dampingRatio = damping, stiffness = stiffness)

    fun <T> snappy(): FiniteAnimationSpec<T> =
        spring(dampingRatio = 0.92f, stiffness = Spring.StiffnessMedium)

    fun <T> effects(durationMillis: Int = 150): FiniteAnimationSpec<T> =
        tween(durationMillis = durationMillis)
}

@Composable
fun HNPressable(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    content: @Composable () -> Unit,
) {
    val interaction = remember { MutableInteractionSource() }
    val pressed by interaction.collectIsPressedAsState()
    val scale by animateFloatAsState(
        targetValue = if (pressed) 0.98f else 1f,
        animationSpec = HNMotion.snappy(),
        label = "hn-press-scale",
    )

    Box(
        modifier = modifier
            .graphicsLayer {
                scaleX = scale
                scaleY = scale
            }
            .clickable(
                interactionSource = interaction,
                indication = ripple(),
                onClick = onClick,
            ),
    ) {
        content()
    }
}

object HNShapes {
    val sm = RoundedCornerShape(8.dp)
    val md = RoundedCornerShape(12.dp)
    val lg = RoundedCornerShape(16.dp)
    val sheet = RoundedCornerShape(24.dp)
    val pill = RoundedCornerShape(50)
}
