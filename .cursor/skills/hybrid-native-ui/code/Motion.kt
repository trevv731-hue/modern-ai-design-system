/**
 * Hybrid Native UI v2.0 — Jetpack Compose Motion & Components
 *
 * Material 3 Expressive + Apple-inspired polish.
 * Spatial: spring. Effects: tween.
 * User preferences:
 * - Button: Hybrid (color + scale 0.98, NO spring)
 * - Card: Apple (hover lift + spring)
 * - List: Hybrid (floating pill)
 * - Input: Android (filled, underline + floating label, purple #6750A4)
 * - Modal: Hybrid (scale + fade)
 * - Switch: Android Material 3
 */

package com.hybridnativeui.motion

import androidx.compose.animation.core.*
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInHorizontally
import androidx.compose.animation.slideOutHorizontally
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

// ============================================================
// Color Tokens
// ============================================================

object HNColors {
    val Primary = Color(0xFF3B82F6)
    val PrimaryHover = Color(0xFF2563EB)
    val Secondary = Color(0xFF6750A4)
    val SecondaryContainer = Color(0xFFE8DEF8)
    val SecondaryOnContainer = Color(0xFF21005D)
    val AI = Color(0xFF10A37F)
    val Danger = Color(0xFFEF4444)
    val BgBase = Color(0xFFF5F5F7)
    val BgSurface = Color(0xFFFFFFFF)
    val BgHover = Color(0x0A000000)
    val BgActive = Color(0x0F000000)
    val BgList = Color(0xFFF7F7F9)
    val TextPrimary = Color(0xFF1C1C1E)
    val TextSecondary = Color(0xFF374151)
    val TextTertiary = Color(0xFF8E8E93)
    val AndroidLabel = Color(0xFF79747E)
    val BorderHairline = Color(0x0F000000)
    val SwitchTrackOff = Color(0xFFE0E0E0)
    val SwitchThumbOn = Color(0xFFE8DEF8)
}

// ============================================================
// Motion Tokens
// ============================================================

object HNMotion {
    // Durations
    const val Fast = 150
    const val Standard = 250
    const val Slow = 350

    // Easing (Material 3 Expressive)
    val StandardEasing = CubicBezierEasing(0.2f, 0f, 0f, 1f)
    val AccelerateEasing = CubicBezierEasing(0.3f, 0f, 1f, 1f)
    val DecelerateEasing = CubicBezierEasing(0f, 0f, 0f, 1f)

    // Springs (Apple HIG: response + damping)
    val SpringDefault = spring<Float>(
        dampingRatio = 0.9f,
        stiffness = Spring.StiffnessLow
    )
    val SpringBouncy = spring<Float>(
        dampingRatio = 0.8f,
        stiffness = Spring.StiffnessMediumLow
    )
    val SpringSnappy = spring<Float>(
        dampingRatio = 0.95f,
        stiffness = Spring.StiffnessMedium
    )
    val SpringCard = spring<Float>(
        dampingRatio = 0.8f,
        stiffness = Spring.StiffnessLow
    )
    val SpringSheet = spring<Float>(
        dampingRatio = 0.85f,
        stiffness = Spring.StiffnessLow
    )
}

// ============================================================
// Button (Hybrid: color + scale 0.98, NO spring)
// ============================================================

@Composable
fun HNButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    variant: HNButtonVariant = HNButtonVariant.Primary,
    size: HNButtonSize = HNButtonSize.Medium,
    enabled: Boolean = true
) {
    val interactionSource = remember { MutableInteractionSource() }
    val isPressed by interactionSource.collectIsPressedAsState()

    val bgColor = when (variant) {
        HNButtonVariant.Primary -> if (isPressed) HNColors.PrimaryHover else HNColors.Primary
        HNButtonVariant.Secondary -> HNColors.BgSurface
        HNButtonVariant.Ghost -> Color.Transparent
        HNButtonVariant.AI -> HNColors.AI
        HNButtonVariant.Danger -> HNColors.Danger
    }

    val textColor = when (variant) {
        HNButtonVariant.Primary, HNButtonVariant.AI, HNButtonVariant.Danger -> Color.White
        HNButtonVariant.Secondary -> HNColors.TextPrimary
        HNButtonVariant.Ghost -> HNColors.TextSecondary
    }

    val height = when (size) {
        HNButtonSize.Small -> 36.dp
        HNButtonSize.Medium -> 48.dp
        HNButtonSize.Large -> 56.dp
    }

    val horizontalPadding = when (size) {
        HNButtonSize.Small -> 16.dp
        HNButtonSize.Medium -> 20.dp
        HNButtonSize.Large -> 24.dp
    }

    val fontSize = when (size) {
        HNButtonSize.Small -> 13.sp
        HNButtonSize.Medium -> 14.sp
        HNButtonSize.Large -> 16.sp
    }

    Box(
        modifier = modifier
            .height(height)
            .padding(horizontal = horizontalPadding / 2)
            .background(bgColor, CircleShape)
            .border(
                width = if (variant == HNButtonVariant.Secondary) 1.dp else 0.dp,
                color = if (variant == HNButtonVariant.Secondary) Color(0xFFE5E7EB) else Color.Transparent,
                shape = CircleShape
            )
            .scale(if (isPressed) 0.98f else 1f)
            .clickable(
                interactionSource = interactionSource,
                indication = null,
                enabled = enabled,
                onClick = onClick
            ),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = text,
            color = textColor.copy(alpha = if (enabled) 1f else 0.4f),
            fontSize = fontSize,
            fontWeight = FontWeight.Medium
        )
    }
}

enum class HNButtonVariant { Primary, Secondary, Ghost, AI, Danger }
enum class HNButtonSize { Small, Medium, Large }

// ============================================================
// Card (Apple: hover lift + spring + shadow)
// ============================================================

@Composable
fun HNCard(
    modifier: Modifier = Modifier,
    onClick: (() -> Unit)? = null,
    content: @Composable ColumnScope.() -> Unit
) {
    var isHovered by remember { mutableStateOf(false) }
    var isPressed by remember { mutableStateOf(false) }

    val scale by animateFloatAsState(
        targetValue = if (isPressed) 0.98f else if (isHovered) 1.015f else 1f,
        animationSpec = if (isHovered && !isPressed) HNMotion.SpringCard else tween(100),
        label = "cardScale"
    )

    val elevation by animateDpAsState(
        targetValue = if (isHovered) 8.dp else 0.dp,
        animationSpec = tween(HNMotion.Standard, easing = HNMotion.StandardEasing),
        label = "cardElevation"
    )

    Column(
        modifier = modifier
            .shadow(elevation, RoundedCornerShape(16.dp))
            .background(HNColors.BgSurface, RoundedCornerShape(16.dp))
            .border(1.dp, HNColors.BorderHairline, RoundedCornerShape(16.dp))
            .padding(24.dp)
            .scale(scale)
            .then(
                if (onClick != null) {
                    Modifier.clickable(
                        interactionSource = remember { MutableInteractionSource() },
                        indication = null,
                        onClick = {
                            isPressed = false
                            onClick()
                        }
                    )
                } else Modifier
            )
            .let {
                // Hover detection (desktop)
                if (onClick != null) {
                    it.pointerInput(Unit) {
                        // detect enter/exit for hover
                    }
                } else it
            },
        content = content
    )
}

// ============================================================
// Floating Pill List (Hybrid selection)
// ============================================================

@Composable
fun <T> HNFloatingPillList(
    items: List<T>,
    selectedIndex: Int,
    onSelect: (Int) -> Unit,
    modifier: Modifier = Modifier,
    itemContent: @Composable (T, Boolean) -> Unit
) {
    Column(
        modifier = modifier
            .background(HNColors.BgList, RoundedCornerShape(10.dp))
            .padding(4.dp),
        verticalArrangement = Arrangement.spacedBy(2.dp)
    ) {
        items.forEachIndexed { index, item ->
            val isSelected = index == selectedIndex
            var isPressed by remember { mutableStateOf(false) }

            val scale by animateFloatAsState(
                targetValue = if (isPressed) 0.98f else 1f,
                animationSpec = if (isPressed) tween(100) else HNMotion.SpringBouncy,
                label = "pillScale"
            )

            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .heightIn(min = 44.dp)
                    .padding(horizontal = 16.dp)
                    .background(
                        if (isSelected) HNColors.BgSurface else Color.Transparent,
                        RoundedCornerShape(8.dp)
                    )
                    .shadow(
                        if (isSelected) 2.dp else 0.dp,
                        RoundedCornerShape(8.dp)
                    )
                    .scale(scale)
                    .clickable(
                        interactionSource = remember { MutableInteractionSource() },
                        indication = null,
                        onClick = { onSelect(index) }
                    ),
                verticalAlignment = Alignment.CenterVertically
            ) {
                itemContent(item, isSelected)
            }
        }
    }
}

// ============================================================
// Switch (Android Material 3)
// ============================================================

@Composable
fun HNSwitch(
    checked: Boolean,
    onCheckedChange: (Boolean) -> Unit,
    modifier: Modifier = Modifier
) {
    val trackColor by animateColorAsState(
        targetValue = if (checked) HNColors.Secondary else HNColors.SwitchTrackOff,
        animationSpec = tween(150),
        label = "switchTrack"
    )

    val thumbColor by animateColorAsState(
        targetValue = if (checked) HNColors.SwitchThumbOn else Color.White,
        animationSpec = tween(150),
        label = "switchThumb"
    )

    val thumbOffset by animateFloatAsState(
        targetValue = if (checked) 20f else 0f,
        animationSpec = tween(250, easing = HNMotion.StandardEasing),
        label = "switchThumbOffset"
    )

    Box(
        modifier = modifier
            .width(52.dp)
            .height(32.dp)
            .background(trackColor, CircleShape)
            .clickable(
                interactionSource = remember { MutableInteractionSource() },
                indication = null,
                onClick = { onCheckedChange(!checked) }
            ),
        contentAlignment = Alignment.CenterStart
    ) {
        Box(
            modifier = Modifier
                .padding(start = (4 + thumbOffset).dp)
                .size(24.dp)
                .background(thumbColor, CircleShape)
                .shadow(1.5.dp, CircleShape)
        )
    }
}

// ============================================================
// Filled Input (Android: underline + floating label, purple)
// ============================================================

@Composable
fun HNFilledInput(
    value: String,
    onValueChange: (String) -> Unit,
    label: String,
    modifier: Modifier = Modifier,
    isError: Boolean = false,
    helperText: String? = null
) {
    var isFocused by remember { mutableStateOf(false) }
    val isActive = isFocused || value.isNotEmpty()

    val labelSize by animateFloatAsState(
        targetValue = if (isActive) 12f else 16f,
        animationSpec = tween(200, easing = HNMotion.StandardEasing),
        label = "labelSize"
    )

    val labelOffset by animateFloatAsState(
        targetValue = if (isActive) -8f else 8f,
        animationSpec = tween(200, easing = HNMotion.StandardEasing),
        label = "labelOffset"
    )

    val labelColor = when {
        isError -> HNColors.Danger
        isFocused -> HNColors.Secondary
        else -> HNColors.AndroidLabel
    }

    val underlineColor = when {
        isError -> HNColors.Danger
        isFocused -> HNColors.Secondary
        else -> HNColors.AndroidLabel
    }

    val underlineWidth by animateDpAsState(
        targetValue = if (isFocused || isError) 2.dp else 1.dp,
        animationSpec = tween(200),
        label = "underlineWidth"
    )

    Column(modifier = modifier.padding(top = 18.dp)) {
        Box {
            Text(
                text = label,
                color = labelColor,
                fontSize = labelSize.sp,
                modifier = Modifier.offset(y = labelOffset.dp)
            )
            TextField(
                value = value,
                onValueChange = onValueChange,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 12.dp, bottom = 8.dp),
                colors = TextFieldDefaults.colors(
                    focusedContainerColor = Color.Transparent,
                    unfocusedContainerColor = Color.Transparent,
                    focusedIndicatorColor = Color.Transparent,
                    unfocusedIndicatorColor = Color.Transparent,
                    cursorColor = HNColors.Secondary
                ),
                singleLine = true,
                textStyle = LocalTextStyle.current.copy(fontSize = 16.sp, color = HNColors.TextPrimary)
            )
        }
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(underlineWidth)
                .background(underlineColor)
        )
        if (helperText != null) {
            Text(
                text = helperText,
                color = if (isError) HNColors.Danger else HNColors.TextTertiary,
                fontSize = 12.sp,
                modifier = Modifier.padding(top = 4.dp)
            )
        }
    }
}

// ============================================================
// Shared Axis Transition (Android M3 page switch)
// ============================================================

@Composable
fun HNSharedAxisX(
    targetState: Int,
    modifier: Modifier = Modifier,
    content: @Composable (Int) -> Unit
) {
    val direction = if (targetState > 0) 1 else -1

    AnimatedContent(
        targetState = targetState,
        modifier = modifier,
        transitionSpec = {
            (slideInHorizontally(
                initialOffsetX = { (it * 0.1f * direction).toInt() },
                animationSpec = tween(300, easing = HNMotion.DecelerateEasing)
            ) + fadeIn(animationSpec = tween(200)))
                .togetherWith(
                    slideOutHorizontally(
                        targetOffsetX = { (-it * 0.1f * direction).toInt() },
                        animationSpec = tween(300, easing = HNMotion.AccelerateEasing)
                    ) + fadeOut(animationSpec = tween(200))
                )
        },
        label = "sharedAxisX"
    ) { state ->
        content(state)
    }
}

// ============================================================
// Modal (Hybrid: scale + fade, centered)
// ============================================================

@Composable
fun HNModal(
    visible: Boolean,
    onDismiss: () -> Unit,
    modifier: Modifier = Modifier,
    content: @Composable () -> Unit
) {
    if (visible) {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(Color.Black.copy(alpha = 0.4f))
                .clickable(onClick = onDismiss),
            contentAlignment = Alignment.Center
        ) {
            val scale by animateFloatAsState(
                targetValue = if (visible) 1f else 0.95f,
                animationSpec = tween(250, easing = HNMotion.StandardEasing),
                label = "modalScale"
            )

            Column(
                modifier = modifier
                    .widthIn(max = 480.dp)
                    .scale(scale)
                    .background(HNColors.BgSurface, RoundedCornerShape(16.dp))
                    .padding(24.dp)
                    .shadow(24.dp, RoundedCornerShape(16.dp))
                    .clickable(indication = null, interactionSource = remember { MutableInteractionSource() }) {}
            ) {
                content()
            }
        }
    }
}
